export const events: Event[] = [
  {
    id: "event-001",
    name: "Tech Conference 2024",
    date: "2024-05-15T10:00:00Z",
    location: "San Francisco, CA",
    description: "A gathering of tech enthusiasts and professionals.",
    tickets: [
      {
        id: "ticket-001-ga",
        type: "General Admission",
        price: 100,
        availableQuantity: 500,
        soldQuantity: 320,
      },
      {
        id: "ticket-001-vip",
        type: "VIP",
        price: 250,
        availableQuantity: 100,
        soldQuantity: 80,
      },
      {
        id: "ticket-001-eb",
        type: "Early Bird",
        price: 75,
        availableQuantity: 200,
        soldQuantity: 200,
      },
    ],
  },
  {
    id: "event-002",
    name: "Rock Concert 2024",
    date: "2024-06-20T20:00:00Z",
    location: "Madison Square Garden, NY",
    description: "A night of rock and roll with the top bands of 2024.",
    tickets: [
      {
        id: "ticket-002-ga",
        type: "General Admission",
        price: 50,
        availableQuantity: 1000,
        soldQuantity: 760,
      },
      {
        id: "ticket-002-vip",
        type: "VIP",
        price: 200,
        availableQuantity: 150,
        soldQuantity: 120,
      },
    ],
  },
  {
    id: "event-003",
    name: "Startup Pitch Night",
    date: "2024-07-10T18:00:00Z",
    location: "Seattle, WA",
    description: "Watch budding startups pitch their ideas to investors.",
    tickets: [
      {
        id: "ticket-003-ga",
        type: "General Admission",
        price: 30,
        availableQuantity: 300,
        soldQuantity: 150,
      },
      {
        id: "ticket-003-vip",
        type: "VIP",
        price: 100,
        availableQuantity: 50,
        soldQuantity: 40,
      },
    ],
  },
];
