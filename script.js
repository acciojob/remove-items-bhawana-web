// Function to remove the selected color from the dropdown
function removeColor() {
    // Get the select element by its ID
    const colorSelect = document.getElementById('colorSelect');
    
    // Get the selected option (the option that the user selected)
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    // If an option is selected, remove it
    if (selectedOption) {
        colorSelect.removeChild(selectedOption);
    }
}
