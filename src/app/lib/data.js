
export const users = [
    {
      user_id: 1,
      username: "john_doe",
      bio: "Music lover and event enthusiast",
      password: "hashedpassword123",
      email: "john@example.com",
      avatar_url: "/avatars/john.jpg",
      created_at: "2024-01-15T08:00:00Z"
    },
    {
      user_id: 2,
      username: "jane_smith",
      bio: "Tech enthusiast",
      password: "hashedpassword456",
      email: "jane@example.com",
      avatar_url: "/avatars/jane.jpg",
      created_at: "2024-01-16T09:00:00Z"
    }
  ];

  export const staff = [
    {
      staff_id: 1,
      username: "admin_alex",
      bio: "Event coordinator with 5 years experience",
      password: "hashedpassword789",
      email: "alex@staff.com",
      avatar_url: "/avatars/alex.jpg",
      created_at: "2024-01-01T10:00:00Z"
    },
    {
      staff_id: 2,
      username: "admin_sarah",
      bio: "Senior event manager",
      password: "hashedpassword101",
      email: "sarah@staff.com",
      avatar_url: "/avatars/sarah.jpg",
      created_at: "2024-01-02T11:00:00Z"
    }
  ];

  export const events = [
    {
      event_id: 1,
      title: "Summer Music Festival",
      staff_id: 1,
      image_url: "/images/music-festival.jpg",
      description: "Annual outdoor music festival featuring top artists",
      event_date: "2024-07-15T18:00:00Z",
      price: 49.99,
      location: "Central Park, New York",
      category: "Music",
      capacity: 1000,
      created_at: "2024-01-20T10:00:00Z"
    },
    {
      event_id: 2,
      title: "Tech Conference 2024",
      staff_id: 2,
      image_url: "/images/tech-conference.jpg",
      description: "Leading technology and innovation conference",
      event_date: "2024-09-20T09:00:00Z",
      price: 299.99,
      location: "Convention Center, San Francisco",
      category: "Technology",
      capacity: 500,
      created_at: "2024-01-21T11:00:00Z"
    },
    {
      event_id: 3,
      title: "Food & Wine Festival",
      staff_id: 1,
      image_url: "/images/food-festival.jpg",
      description: "Culinary excellence and wine tasting event",
      event_date: "2024-08-10T17:00:00Z",
      price: 75.00,
      location: "Downtown Food Court, Chicago",
      category: "Food & Drink",
      capacity: 300,
      created_at: "2024-01-22T09:00:00Z"
    }
  ];

  export const event_registrations = [
    {
      registration_id: 1,
      event_id: 1,
      user_id: 1,
      status: "confirmed",
      google_calendar_event_id: "abc123xyz",
      created_at: "2024-01-25T14:00:00Z"
    },
    {
      registration_id: 2,
      event_id: 2,
      user_id: 2,
      status: "pending",
      google_calendar_event_id: null,
      created_at: "2024-01-26T15:00:00Z"
    },
    {
      registration_id: 3,
      event_id: 1,
      user_id: 2,
      status: "confirmed",
      google_calendar_event_id: "def456uvw",
      created_at: "2024-01-27T16:00:00Z"
    }
  ];
