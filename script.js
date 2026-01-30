// Medicine data
let medicines = [
    { id: 1, name: 'Paracetamol', category: 'Tablet', quantity: 120, price: 20 },
    { id: 2, name: 'Amoxicillin', category: 'Capsule', quantity: 80, price: 50 },
    { id: 3, name: 'Cough Syrup', category: 'Syrup', quantity: 40, price: 90 },
    { id: 4, name: 'Insulin', category: 'Injection', quantity: 25, price: 300 }
];

let editingId = null;
let sortDirection = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    updateStats();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterMedicines);
    document.getElementById('categoryFilter').addEventListener('change', filterMedicines);
    document.getElementById('medicineForm').addEventListener('submit', handleFormSubmit);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('medicineModal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Render table
function renderTable(filteredMedicines = medicines) {
    const tbody = document.getElementById('medicineTableBody');
    tbody.innerHTML = '';
    
    filteredMedicines.forEach(medicine => {
        const row = createTableRow(medicine);
        tbody.appendChild(row);
    });
}

// Create table row
function createTableRow(medicine) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><div class="medicine-name">${medicine.name}</div></td>
        <td><span class="medicine-category">${medicine.category}</span></td>
        <td><span class="quantity-cell ${medicine.quantity < 30 ? 'quantity-low' : ''}">${medicine.quantity}</span></td>
        <td><span class="price-cell">₹${medicine.price}</span></td>
        <td>
            <div class="action-buttons">
                <button class="btn-edit" onclick="editMedicine(${medicine.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteMedicine(${medicine.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </td>
    `;
    return row;
}

// Sort table
function sortTable(columnIndex) {
    const table = document.getElementById('medicineTable');
    const headers = table.querySelectorAll('th');
    
    // Reset all header classes
    headers.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    
    const currentHeader = headers[columnIndex];
    const isAsc = sortDirection[columnIndex] !== 'asc';
    sortDirection[columnIndex] = isAsc ? 'asc' : 'desc';
    
    currentHeader.classList.add(isAsc ? 'sort-asc' : 'sort-desc');
    
    medicines.sort((a, b) => {
        let valA, valB;
        
        switch(columnIndex) {
            case 0: // Name
                valA = a.name.toLowerCase();
                valB = b.name.toLowerCase();
                break;
            case 1: // Category
                valA = a.category.toLowerCase();
                valB = b.category.toLowerCase();
                break;
            case 2: // Quantity
                valA = a.quantity;
                valB = b.quantity;
                break;
            case 3: // Price
                valA = a.price;
                valB = b.price;
                break;
        }
        
        if (typeof valA === 'number') {
            return isAsc ? valA - valB : valB - valA;
        } else {
            return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
    });
    
    renderTable();
}

// Filter medicines
function filterMedicines() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    const filtered = medicines.filter(medicine => {
        const matchesSearch = medicine.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || medicine.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    renderTable(filtered);
}

// Update statistics
function updateStats() {
    const totalMedicines = medicines.length;
    const totalStock = medicines.reduce((sum, med) => sum + med.quantity, 0);
    const lowStock = medicines.filter(med => med.quantity < 30).length;
    
    document.getElementById('totalMedicines').textContent = totalMedicines;
    document.getElementById('totalStock').textContent = totalStock;
    document.getElementById('lowStock').textContent = lowStock;
}

// Modal functions
function openModal() {
    document.getElementById('medicineModal').style.display = 'block';
    document.getElementById('modalTitle').textContent = 'Add New Medicine';
    document.getElementById('medicineForm').reset();
    editingId = null;
}

function closeModal() {
    document.getElementById('medicineModal').style.display = 'none';
    editingId = null;
}

// Edit medicine
function editMedicine(id) {
    const medicine = medicines.find(med => med.id === id);
    if (!medicine) return;
    
    editingId = id;
    document.getElementById('modalTitle').textContent = 'Edit Medicine';
    document.getElementById('medicineName').value = medicine.name;
    document.getElementById('medicineCategory').value = medicine.category;
    document.getElementById('medicineQuantity').value = medicine.quantity;
    document.getElementById('medicinePrice').value = medicine.price;
    
    document.getElementById('medicineModal').style.display = 'block';
}

// Delete medicine
function deleteMedicine(id) {
    if (confirm('Are you sure you want to delete this medicine?')) {
        medicines = medicines.filter(med => med.id !== id);
        renderTable();
        updateStats();
        filterMedicines();
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('medicineName').value,
        category: document.getElementById('medicineCategory').value,
        quantity: parseInt(document.getElementById('medicineQuantity').value),
        price: parseFloat(document.getElementById('medicinePrice').value)
    };
    
    if (editingId) {
        const index = medicines.findIndex(med => med.id === editingId);
        if (index !== -1) {
            medicines[index] = { ...medicines[index], ...formData };
        }
    } else {
        const newId = Math.max(...medicines.map(med => med.id), 0) + 1;
        medicines.push({ id: newId, ...formData });
    }
    
    renderTable();
    updateStats();
    closeModal();
    filterMedicines();
}
