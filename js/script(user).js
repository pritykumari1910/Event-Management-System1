// Modal functionality for Logout Confirmation
const logoutBtn = document.getElementById('logoutBtn');
const modal = document.getElementById('logoutModal');
const span = document.getElementsByClassName('close')[0];
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

logoutBtn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

cancelLogout.onclick = function() {
    modal.style.display = 'none';
}

confirmLogout.onclick = function() {
    alert('Logged out successfully!');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Additional interactivity for other buttons
document.getElementById('vendorBtn').onclick = function() {
    alert('Vendor section clicked!');
}

document.getElementById('viewCart').onclick = function() {
    alert('Viewing Cart...');
}

document.getElementById('checkout').onclick = function() {
    alert('Proceeding to Checkout...');
}

document.getElementById('guestListBtn').onclick = function() {
    alert('Guest List opened.');
}

document.getElementById('orderListBtn').onclick = function() {
    alert('Order List opened.');
}
