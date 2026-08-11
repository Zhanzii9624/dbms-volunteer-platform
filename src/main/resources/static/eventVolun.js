
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("search");
  const firstTemplate = document.getElementById('firstEventTemplate');
  const eventTemplate = document.getElementById('eventTemplate');
  const eventsContainer = document.getElementById('eventsContainer');

  if (!firstTemplate || !eventTemplate || !eventsContainer) {
    console.error("Template elements not found");
    return;
  }

  const renderEvents = (events) => {
    eventsContainer.innerHTML = '';

    if (!Array.isArray(events)) {
      return;
    }

    events.forEach((event, index) => {
      const templateContent = index === 0 ? firstTemplate.content : eventTemplate.content;
      const eventClone = document.importNode(templateContent, true);
      eventClone.querySelector('.text-muted').textContent = event.startDate;
      eventClone.querySelector('.card-title').textContent = event.name;
      eventClone.querySelector('.card-text').textContent = event.description;
      eventClone.querySelector('.btn-primary').href = `/volEventDetail?id=${event.id}`;
      eventsContainer.appendChild(eventClone);
    });
  };

  const loadEvents = (url) => {
    fetch(url)
      .then(response => {
        if (response.status === 204) {
          return [];
        }
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(renderEvents)
      .catch(error => {
        console.error('Error loading the events:', error);
      });
  };

  loadEvents('/api/events/clickdesc');

  const bindClick = (id, handler) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", handler);
    }
  };

  const username = localStorage.getItem('name');
  const profileLink = document.getElementById("profileLink");
  if (username && profileLink) {
    profileLink.textContent = username;
  }

  bindClick("profileLink", function() {
    window.location.href = "/volunteerProfile";
  });

  bindClick("discussSecLink", function() {
    window.location.href = "/discussSec";
  });

  bindClick("logoutLink", function() {
    localStorage.clear();
    window.location.href = "/login";
  });

  if (searchButton) {
    searchButton.addEventListener("click", function() {
      const minFee = document.getElementById("min").value;
      const maxFee = document.getElementById("max").value;
      const startDate = document.getElementById("eventDateStart").value;
      const endDate = document.getElementById("eventDateEnd").value;
      const searchTerm = document.getElementById("searchTerm").value;

      let url = `/api/events/search?minFee=${minFee}&maxFee=${maxFee}`;
      if (startDate) {
        url += `&startDate=${startDate}`;
      }
      if (endDate) {
        url += `&endDate=${endDate}`;
      }
      if (searchTerm) {
        url += `&searchTerm=${searchTerm}`;
      }

      loadEvents(url);
    });
  }
});



  