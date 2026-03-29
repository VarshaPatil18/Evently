Enhance the existing "Smart Food Management" section to be fully functional and interactive.

IMPORTANT:
- Do NOT change UI design
- Only add logic, state handling, and interactivity
- Ensure all elements are connected dynamically

========================
⚙️ CORE FUNCTIONALITY:

1. WASTE REDUCTION SLIDER (MAKE IT WORK):

- Slider must have 3 levels:
  → 0 = Low
  → 1 = Balanced
  → 2 = Maximum

- It should be draggable and update state in real-time

- Map values:
  Low → wasteFactor = 0.20
  Balanced → wasteFactor = 0.10
  Maximum → wasteFactor = 0.05

- Display current label dynamically:
  → "Low" / "Balanced" / "Maximum"

========================
2. FOOD CALCULATION LOGIC:

Inputs:
- Guest Count
- Waste Reduction Level

Logic:
- Estimated Food = guestCount × (1 + wasteFactor)
- Expected Waste = Estimated Food - guestCount

Example:
guestCount = 100
Balanced → wasteFactor = 0.10
Estimated Food = 110
Waste = 10

========================
3. LIVE UI UPDATES:

- Update in real-time:
  → Estimated Food (plates)
  → Expected Waste (plates)

- If guest count changes → auto recalculate
- If slider changes → auto recalculate

========================
4. DONATION LOGIC:

If "Donate extra food" is checked:
- Help feed people = Expected Waste
Else:
- Help feed people = 0

========================
5. IMPACT CALCULATIONS:

Assume:
- Cost per plate = ₹300

Calculate:
- Money saved = (Default waste - Current waste) × 300
- Waste reduction % = (Default waste - Current waste) / Default waste × 100

Default waste = guestCount × 0.20

Update dynamically:
- ₹ saved
- % reduced
- People fed

========================
6. RUN SMART OPTIMIZATION BUTTON:

On click:
- Validate guest count > 0
- Trigger calculation
- Smoothly scroll to results (if needed)
- Show small loading animation (1–2 sec)
- Then highlight updated results

========================
7. ERROR HANDLING:

- If guest count = 0:
  → Show message: "Enter valid guest count"
  → Disable calculations

========================
🎯 FINAL GOAL:

Transform this from a static UI into a fully working smart system where:
- Slider affects calculations
- Button triggers real output
- All values update dynamically
- User clearly sees impact of their choices