# MediTrack - Medicine Inventory Management System

A modern, responsive web application for managing medicine inventory with patient feedback functionality.

## Features

### 🏥 Medicine Inventory Management
- **Modern Table View** with sortable columns
- **Search & Filter** medicines by name and category
- **CRUD Operations** - Add, Edit, Delete medicines
- **Real-time Statistics** - Total medicines, stock count, low stock alerts
- **Responsive Design** - Works on all devices

### ⭐ Patient Feedback System
- **Interactive Star Ratings** for multiple categories
- **Comprehensive Form** with patient details
- **Modern UI/UX** with smooth animations
- **Form Validation** and success notifications

## Screenshots

### Medicine Inventory Dashboard
![Medicine Inventory](https://via.placeholder.com/800x400?text=Medicine+Inventory+Dashboard)

### Patient Feedback Form
![Patient Feedback](https://via.placeholder.com/800x400?text=Patient+Feedback+Form)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs locally

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meditrack.git
```

2. Navigate to the project directory:
```bash
cd meditrack
```

3. Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

4. Access the application at `http://localhost:8000`

## File Structure

```
meditrack/
├── index.html              # Main medicine inventory page
├── patient_feedback.html   # Patient feedback form
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
└── README.md              # Project documentation
```

## Usage

### Medicine Inventory
1. **View Medicines**: All medicines are displayed in a sortable table
2. **Search**: Use the search bar to find specific medicines
3. **Filter**: Filter by category using the dropdown
4. **Add Medicine**: Click "Add Medicine" button to add new entries
5. **Edit Medicine**: Click "Edit" button on any medicine row
6. **Delete Medicine**: Click "Delete" button (with confirmation)
7. **Sort**: Click column headers to sort data

### Patient Feedback
1. Click "Patient Feedback" button from the main dashboard
2. Fill in patient details (name, email, visit date, department)
3. Rate experience using interactive star ratings:
   - Overall Experience
   - Staff Behavior
   - Cleanliness
4. Add additional comments
5. Submit feedback

## Features in Detail

### Sorting Functionality
- Click any column header to sort
- Toggle between ascending/descending order
- Visual indicators show current sort direction

### Search & Filter
- Real-time search as you type
- Filter by medicine category
- Combined search and filter functionality

### Statistics Dashboard
- **Total Medicines**: Count of all medicines
- **Total Stock**: Sum of all quantities
- **Low Stock**: Medicines with quantity < 30

### Star Rating System
- Interactive 5-star rating system
- Hover effects with visual feedback
- Text descriptions (Poor, Fair, Good, Very Good, Excellent)
- Validation ensures all ratings are provided

## Customization

### Adding New Medicine Categories
Edit the category options in both files:
```html
<option value="NewCategory">New Category</option>
```

### Changing Low Stock Threshold
Modify the threshold in `script.js`:
```javascript
const lowStock = medicines.filter(med => med.quantity < 30).length;
```

### Styling Customization
- Colors: Modify CSS gradient values
- Fonts: Change font-family in CSS
- Layout: Adjust grid and flexbox properties

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/meditrack](https://github.com/yourusername/meditrack)

## Acknowledgments

- Font Awesome for icons
- Modern CSS techniques for styling
- Responsive design principles