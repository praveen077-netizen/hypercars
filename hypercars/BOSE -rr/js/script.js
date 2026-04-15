  
  
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  const logo = document.getElementById("logo");
  const navLinks = document.getElementById("navLinks");

  logo.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.getElementById('icon').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const target = document.getElementById('bose-ft');
    
    target.scrollIntoView({  
      behavior: 'smooth', 
      block: 'center'    
    });
  });

  