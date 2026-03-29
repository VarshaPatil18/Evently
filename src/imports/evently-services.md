Create interactive navigation and pages for the Evently event planning website. The services section contains five services: Venue Suggestions, Decor, Catering, Photography, and Bespoke Event Planning. Each service card must be clickable and should navigate to its respective service page.

General user flow:
Home → Services → Select Service → Choose Package → Enter Event Details → Submit Request.

1. VENUE SUGGESTIONS PAGE
   When the user clicks Venue Suggestions, navigate to "/services/venue".

Page layout:

- Page title: “Find the Perfect Venue for Your Event”
- Short description explaining that users can explore venue options based on guest count and budget.

Show three packages:
• Basic Venue Package
Small banquet halls, community halls, capacity 50–100 guests, budget ₹20K–₹50K.

• Premium Venue Package
Premium banquet halls, garden venues, boutique hotels, capacity 100–300 guests, budget ₹50K–₹1.5L.

• Luxury Venue Package
Luxury hotels, resorts, destination venues, capacity 300+ guests, budget ₹1.5L+.

Below the packages show example venue suggestions with cards:
Each venue card should contain:

- Venue image
- Venue name
- Location
- Guest capacity
- Price range
- Button: “Select Venue”.

When the user clicks Select Venue, open a form asking:

- Budget
- Location
- Event Date
- Number of Guests
- Submit button: “Check Availability”.

2. DECOR PAGE
   When the user clicks Decor, navigate to "/services/decor".

Page title: “Choose Your Event Decor Theme”.

Show packages:
• Basic Decor
Simple stage setup, entry decoration, balloons and lighting.

• Premium Decor
Theme-based decor, floral backdrop, entrance arch, stage lighting.

• Luxury Decor
Designer stage, premium floral installations, LED lighting, customized theme decor.

Below the packages show decor themes:
Example cards:

- Floral Wedding Decor
- Minimalist Stage Decor
- Royal Mandap Decor
- Garden Theme Decor
- LED Lighting Decor

Each card must contain:

- Image
- Theme name
- Estimated cost
- Button: “Select Theme”.

Selecting a theme opens a form asking:

- Budget
- Location
- Event Date
- Guest Count
- Submit button: “Book Decor”.

3. CATERING PAGE
   When the user clicks Catering, navigate to "/services/catering".

Page title: “Catering Services for Your Event”.

Packages:
• Basic Catering – Simple buffet, vegetarian menu, ₹400–₹600 per plate.
• Premium Catering – Multi-cuisine buffet, veg and non-veg options, live counters, ₹700–₹1200 per plate.
• Luxury Catering – Premium chefs, dessert stations, customized menu, ₹1500+ per plate.

Below show menu options:
Cards should include:

- Menu name
- Cuisine type
- Price per plate
- Button: “Select Menu”.

Clicking the button opens a form asking:

- Budget
- Location
- Event Date
- Number of Guests
- Food Preference (Veg / Non-Veg)
- Submit button: “Check Catering Availability”.

4. PHOTOGRAPHY PAGE
   When the user clicks Photography, navigate to "/services/photography".

Page title: “Capture Your Special Moments”.

Packages:
• Basic Photography – 1 photographer, 4-hour coverage.
• Premium Photography – 2 photographers, full event coverage, photo album.
• Luxury Photography – cinematic video, drone photography, full editing package.

Below show photography services:
Cards:

- Wedding Photography
- Event Photography
- Drone Photography
- Cinematic Video Coverage

Each card should contain:

- Service image
- Service name
- Estimated price
- Button: “Book Photographer”.

Clicking opens a form asking:

- Budget
- Location
- Event Date
- Event Type
- Submit button: “Check Photographer Availability”.

5. BESPOKE PAGE
   When the user clicks Bespoke, navigate to "/services/bespoke".

Page title: “Custom Event Planning”.

Description: “Tell us about your dream event and our planners will design a customized event plan.”

Show event types:

- Wedding Planning
- Birthday Party Planning
- Corporate Events
- Engagement / Anniversary Events

When the user selects one, open a form asking:

- Event Type
- Budget
- Location
- Event Date
- Number of Guests
- Special Requirements

Submit button: “Request Custom Event Plan”.

After submitting any service request, show a confirmation message:
“Your request has been submitted successfully. Our event manager will contact you shortly.”