const questions = [
 {
    "question": "29. What is the specified maximum RPM for this powerplant?",
    "options": ["a) 2700 RPM", "b) 1000 RPM", "c) 3000 RPM", "d) 310 RPM"],
    "correct": 0
  },
  {
    "question": "30. What is the maximum continuous engine speed recommended for taxiing?",
    "options": ["a) 2700 RPM", "b) 1000 RPM", "c) 500 RPM", "d) 3000 RPM"],
    "correct": 1
  },
  {
    "question": "31. What temperature range for Cylinder Head Temperature is indicated by the GREEN arc (normal operating range)?",
    "options": ["a) >460 F", "b) 240---420 F", "c) 100-500 F", "d) 420---460 F"],
    "correct": 1
  },
  {
    "question": "32. A Cylinder Head Temperature reading in the YELLOW arc (caution range) falls within which range?",
    "options": ["a) 100-240 F", "b) 240---420 F", "c) 420---460 F", "d) >460 F"],
    "correct": 2
  },
  {
    "question": "33. The RED line for Cylinder Head Temperature indicates the maximum limit. This limit is exceeded above:",
    "options": ["a) 460 F", "b) 240 F", "c) 500 F", "d) 420 F"],
    "correct": 0
  },
  {
    "question": "34. What engine speed range is marked with a GREEN arc, representing the normal operating range?",
    "options": ["a) 0-3000 RPM", "b) >2700 RPM", "c) 0-500 RPM", "d) 500-2700 RPM"],
    "correct": 3
  },
  {
    "question": "35. An engine speed exceeding which value is marked by a RED line (maximum limit)?",
    "options": ["a) 1000 RPM", "b) 2700 RPM", "c) 3000 RPM", "d) 500 RPM"],
    "correct": 2
  },
  {
    "question": "36. What is the specified operating range for Exhaust Gas Temperature (EGT)?",
    "options": ["a) 0-3000 RPM", "b) 100-500 F", "c) 1000-1600 F", "d) 75-250 F"],
    "correct": 2
  },
  {
    "question": "37. Which range represents the normal operating range (GREEN arc) for Manifold Pressure?",
    "options": ["a) 0-15 \"Hg", "b) 10-35 \"Hg", "c) 29.5-35 \"Hg", "d) 15-29.5 \"Hg"],
    "correct": 3
  },
  {
    "question": "38. What is the normal operating range (GREEN arc) for Oil Pressure?",
    "options": ["a) 10-30 PSI", "b) <10 or >100 PSI", "c) 30-60 PSI", "d) 60-100 PSI"],
    "correct": 2
  },
  {
    "question": "39. Which Oil Pressure ranges are indicated by a YELLOW arc (caution range)?",
    "options": ["a) 0-30 PSI", "b) 10-30 PSI or 60-100 PSI", "c) 30-60 PSI", "d) <10 PSI or >100 PSI"],
    "correct": 3
  },
  {
    "question": "40. Oil Pressure readings falling below 10 PSI or exceeding 100 PSI are marked by:",
    "options": ["a) A RED line", "b) No specific marking", "c) A green arc", "d) A yellow arc"],
    "correct": 0
  },
  {
    "question": "41. What is the normal operating range (GREEN arc) for Oil Temperature?",
    "options": ["a) 75-250 F", "b) 100-240 F", "c) >240 F", "d) 75-100 F"],
    "correct": 1
  },
  {
    "question": "42. An Oil Temperature exceeding which value is marked by a RED line (maximum limit)?",
    "options": ["a) 250 F", "b) 75 F", "c) 240 F", "d) 100 F"],
    "correct": 2
  },
  {
    "question": "43. What is the full scale range indicated for Percent Power?",
    "options": ["a) 0-100%", "b) 0-75%", "c) Not specified", "d) 50-100%"],
    "correct": 0
  },
  {
    "question": "44. What is the Maximum Takeoff Mass (MTOM) of the aircraft?",
    "options": ["a) 130 lb", "b) 3400 lb", "c) 24.8 lb/ft2", "d) 3600 lb"],
    "correct": 3
  },
  {
    "question": "45. What is the Maximum Zero Fuel Mass (MZFM) of the aircraft?",
    "options": ["a) 3400 lb", "b) 130 lb", "c) 24.8 lb/ft2", "d) 3600 lb"],
    "correct": 0
  },
  {
    "question": "46. What is the baggage compartment loading capacity of the aircraft?",
    "options": ["a) 3400 lb", "b) 130 lb", "c) 24.8 lb/ft2", "d) 3600 lb"],
    "correct": 1
  },
  {
    "question": "47. What is the wing loading of the aircraft?",
    "options": ["a) 11.61 lb/hp", "b) 24.8 lb/ft2", "c) 130 lb", "d) 3600 lb"],
    "correct": 1
  },
  {
    "question": "48. What is the power loading of the aircraft?",
    "options": ["a) 24.8 lb/ft2", "b) 3600 lb", "c) 11.61 lb/hp", "d) 3400 lb"],
    "correct": 2
  },
  {
    "question": "49. What type of fuel is used in the aircraft?",
    "options": ["a) Aviation Grade 100 LL (Blue) or 100 (Green)", "b) Aviation Grade 100 LL (Red) or 100 (Yellow)", "c) Aviation Grade 80 (Red) or 100 (Blue)", "d) Aviation Grade 100 LL (Green) or 100 (Red)"],
    "correct": 0
  },
  {
    "question": "50. What is the total fuel capacity of the aircraft?",
    "options": ["a) 94.5 USG (358 L)", "b) 94.5 USG (348 L)", "c) 90.0 USG (340 L)", "d) 92.0 USG (348 L)"],
    "correct": 0
  },
  {
    "question": "51. What is the total usable fuel capacity of the aircraft?",
    "options": ["a) 94.5 USG (358 L)", "b) 92.0 USG (348 L)", "c) 90.0 USG (340 L)", "d) 92.0 USG (358 L)"],
    "correct": 1
  },
  {
    "question": "52. What is the maximum allowable fuel imbalance for the aircraft?",
    "options": ["a) 12 USG (45.4 L)", "b) 10 USG (37.9 L)", "c) 14 USG (53.0 L)", "d) 8 USG (30.3 L)"],
    "correct": 1
  },
  {
    "question": "53. At what fuel imbalance level does the advisory threshold begin (yellow arc)?",
    "options": ["a) Greater than 6 USG (22.7 L)", "b) Greater than 10 USG (37.9 L)", "c) Greater than 8 USG (30.3 L)", "d) Greater than 12 USG (45.4 L)"],
    "correct": 2
  },
  {
    "question": "54. At what fuel imbalance level does the caution threshold begin (orange arc)?",
    "options": ["a) Greater than 8 USG (30.3 L)", "b) Greater than 12 USG (45.4 L)", "c) Greater than 14 USG (53.0 L)", "d) Greater than 10 USG (37.9 L)"],
    "correct": 1
  },
  {
    "question": "55. At what fuel imbalance level does the warning threshold begin (red arc)?",
    "options": ["a) Greater than 14 USG (53.0 L)", "b) Greater than 12 USG (45.4 L)", "c) Greater than 10 USG (37.9 L)", "d) Greater than 8 USG (30.3 L)"],
    "correct": 0
  },
  {
    "question": "56. What is the normal range for fuel flow in US gallons per hour (green arc)?",
    "options": ["a) 0-20 USG/h", "b) 0-25 USG/h", "c) 0-30 USG/h", "d) 0-35 USG/h"],
    "correct": 1
  }
];