const events = [
      {
        name: "Mustafa Zahid ft. Roxen",
        date: "May 18, 2025",
        time: "7:00 PM",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
        location: "PNCA Islamabad",
        description: "Enjoy live music with legendary Mustafa Zahid in an unforgettable evening of rock and soul."
      },
      {
        name: "Shaam-e-Suroor",
        date: "May 22, 2025",
        time: "5:00 PM",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
        location: "Islamabad",
        description: "Qawali, DJ, Music, Dinner and more in a magical evening celebrating culture and tradition."
      },
      {
        name: "The Social Bazar",
        date: "May 17-18, 2025",
        time: "12:00 PM",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
        location: "Lahore",
        description: "Everything you need in one place, from food to music. A weekend marketplace experience like no other."
      }
    ];

    function displayEvents(eventsList) {
      const container = document.getElementById("eventsContainer");
      
      if (eventsList.length === 0) {
        container.innerHTML = `
          <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>No events found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        `;
        return;
      }

      container.innerHTML = eventsList.map(event => `
        <div class="event-card fade-in">
          <img src="${event.image}" alt="${event.name}" class="event-image">
          <div class="event-content">
            <h3 class="event-name">${event.name}</h3>
            <div class="event-datetime">
              <i class="fas fa-calendar-alt"></i>
              <span>${event.date} • ${event.time}</span>
            </div>
            <div class="event-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>${event.location}</span>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-actions">
              <a href="#" class="btn btn-primary">
                <i class="fas fa-ticket-alt"></i> Register Now
              </a>
              <a href="#" class="btn btn-secondary">
                <i class="fas fa-info-circle"></i> Details
              </a>
            </div>
          </div>
        </div>
      `).join('');

      // Trigger animations
      setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
          el.classList.add('visible');
        });
      }, 100);
    }

    // Initial display
    displayEvents(events);

    // Search functionality
    document.getElementById("searchInput").addEventListener("input", function () {
      const value = this.value.toLowerCase();
      const filtered = events.filter(e => 
        e.name.toLowerCase().includes(value) ||
        e.location.toLowerCase().includes(value) ||
        e.description.toLowerCase().includes(value)
      );
      displayEvents(filtered);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });