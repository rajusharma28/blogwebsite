
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('Save');
const noteList = document.getElementById('note-list');
const editor = document.getElementById('editor');
const editButtons = document.querySelectorAll('#edit-tool .btn');
const submitButton = document.querySelector('.submit');
const signupForm = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    password: document.getElementById('psword'),
    button: document.getElementById('button-singup')
};


// Capabilities for Taking Notes
saveButton?.addEventListener('click', () => {
    const noteContent = noteInput?.value.trim();

    if (noteContent) {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.textContent = noteContent;
        noteList?.appendChild(noteItem);
        noteInput.value = '';
    } else {
        alert('Please write something to save.');
    }
});

// Rich Text Editor Capabilities
editButtons.forEach(button => {
    button.addEventListener('click', () => { 
        const action = button.dataset.action  || button.textContent.toLowerCase() || button. alert('public your blog has been submited succussfully !');
        
        switch(action) {
            case 'bold':
                document.execCommand('bold', false);
                break;
            case 'italic':
                document.execCommand('italic', false);
                break;
            case 'underline':
                document.execCommand('underline', false);
                break;
            case 'heading':
                document.execCommand('formatBlock', false, '<h1>');
                break;
        }

    });

});


// Blog Submission
document.addEventListener('DOMContentLoaded', () => {
    submitButton?.addEventListener('click', () => {
        const blogContent = editor?.innerHTML.trim();

        if (blogContent) {
            console.log('Blog submitted successfully! Content:\n\n', blogContent);
            editor.innerHTML = '';
        } else {
            console.warn('Please write content for your blog before submitting.');
        }
    });
});

// Signup Functionality
signupForm.button?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const userData = {
        name: signupForm.name?.value.trim(),
        email: signupForm.email?.value.trim(),
        password: signupForm.password?.value
    };

    if (!userData.name || !userData.email || !userData.password) {
        alert('Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    try {
        localStorage.setItem('userData', JSON.stringify(userData));
        
        signupForm.name.value = '';
        signupForm.email.value = '';
        signupForm.password.value = '';
        
        alert('Signup successful! Your data has been saved.');
    } catch (error) {
        console.error('Error saving user data:', error);
        alert('An error occurred during signup. Please try again.');
    }
});