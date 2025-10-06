const questions = [
  {
    "question": "1. What is the VNE (Never Exceed Speed)?",
    "options": ["a) 205 KIAS", "b) 176 KIAS", "c) 150 KIAS", "d) 110 KIAS"],
    "correct": 0
  },
  {
    "question": "2. What is the VNO (Maximum Structural Cruising Speed)?",
    "options": ["a) 123 KIAS", "b) 176 KIAS", "c) 84 KIAS", "d) 205 KIAS"],
    "correct": 1
  },
  {
    "question": "3. What is the VO at 3600 lb?",
    "options": ["a) 110 KIAS", "b) 150 KIAS", "c) 123 KIAS", "d) 140 KIAS"],
    "correct": 3
  },
  {
    "question": "4. What is the VO at 2900 lb?",
    "options": ["a) 108 KIAS", "b) 123 KIAS", "c) 140 KIAS", "d) 85 KIAS"],
    "correct": 1
  },
  {
    "question": "5. What is the VFE at 50% flaps?",
    "options": ["a) 150 KIAS", "b) 110 KIAS", "c) 176 KIAS", "d) 123 KIAS"],
    "correct": 0
  },
  {
    "question": "6. What is the VFE at 100% flaps?",
    "options": ["a) 110 KIAS", "b) 150 KIAS", "c) 140 KIAS", "d) 123 KIAS"],
    "correct": 0
  },
  {
    "question": "7. What is the VPD (Parachute Deployment Speed)?",
    "options": ["a) 176 KIAS", "b) 140 KIAS", "c) 150 KIAS", "d) 110 KIAS"],
    "correct": 1
  },
  {
    "question": "8. What is the VR (Rotation Speed)?",
    "options": ["a) 73 KIAS", "b) 92 KIAS", "c) 108 KIAS", "d) 84 KIAS"],
    "correct": 0
  },
  {
    "question": "9. What is the Obstacle Clearance Speed?",
    "options": ["a) 110 KIAS", "b) 123 KIAS", "c) 84 KIAS", "d) 73 KIAS"],
    "correct": 2
  },
  {
    "question": "10. What is the normal enroute speed?",
    "options": ["a) 108 KIAS", "b) 92 KIAS", "c) 85-90 KIAS", "d) 110-120 KIAS"],
    "correct": 3
  },
  {
    "question": "11. What is the VY (Best Rate of Climb)?",
    "options": ["a) 88 KIAS", "b) 84 KIAS", "c) 108 KIAS", "d) 73 KIAS"],
    "correct": 0
  },
  {
    "question": "12. What is the VX (Best Angle of Climb)?",
    "options": ["a) 88 KIAS", "b) 92 KIAS", "c) 108 KIAS", "d) 84 KIAS"],
    "correct": 1
  },
  {
    "question": "13. What is the VG (Best Glide Speed)?",
    "options": ["a) 92 KIAS", "b) 108 KIAS", "c) 110 KIAS", "d) 84 KIAS"],
    "correct": 0
  },
  {
    "question": "14. What is the landing speed with flaps UP (Normal)?",
    "options": ["a) 85-90 KIAS", "b) 80-85 KIAS", "c) 92 KIAS", "d) 90-95 KIAS"],
    "correct": 3
  },
  {
    "question": "15. What is the landing speed with flaps UP (Emergency)?",
    "options": ["a) 85 KIAS", "b) 90 KIAS", "c) 80 KIAS", "d) 95 KIAS"],
    "correct": 1
  },
  {
    "question": "16. What is the landing speed with flaps 50% (Normal)?",
    "options": ["a) 73 KIAS", "b) 90-95 KIAS", "c) 85-90 KIAS", "d) 80-85 KIAS"],
    "correct": 2
  },
  {
    "question": "17. What is the landing speed with flaps 50% (Emergency)?",
    "options": ["a) 84 KIAS", "b) 85 KIAS", "c) 90 KIAS", "d) 80 KIAS"],
    "correct": 1
  },
  {
    "question": "18. What is the landing speed with flaps 100% (Normal)?",
    "options": ["a) 80-85 KIAS", "b) 90-95 KIAS", "c) 79 KIAS", "d) 85-90 KIAS"],
    "correct": 0
  },
  {
    "question": "19. What is the landing speed with flaps 100% (Emergency)?",
    "options": ["a) 80 KIAS", "b) 85 KIAS", "c) 73 KIAS", "d) 90 KIAS"],
    "correct": 0
  },
  {
    "question": "20. What is the VREF (Short Field Approach Speed)?",
    "options": ["a) 80 KIAS", "b) 84 KIAS", "c) 85 KIAS", "d) 79 KIAS"],
    "correct": 3
  },
  {
    "question": "21. What is the Go-Around Speed at full power?",
    "options": ["a) 80 KIAS", "b) 88 KIAS", "c) 85 KIAS", "d) 73 KIAS"],
    "correct": 1
  },
  {
    "question": "22. What is the Autopilot operating range?",
    "options": ["a) 90-185 KIAS", "b) 80-185 KIAS", "c) 73-185 KIAS", "d) 84-185 KIAS"],
    "correct": 1
  },
  {
    "question": "23. What is the maximum demonstrated crosswind component?",
    "options": ["a) 25 KIAS", "b) 21 KIAS", "c) 30 KIAS", "d) 15 KIAS"],
    "correct": 1
  },
  {
    "question": "24. Which speed range represents the full flap operating range (VSO-VFE), typically indicated by a white arc?",
    "options": ["a) 176-205 KIAS", "b) 205 KIAS", "c) 74-176 KIAS", "d) 64-110 KIAS"],
    "correct": 3
  },
  {
    "question": "25. The normal operating range (VS1-VNO), marked by a green arc, corresponds to which speed range?",
    "options": ["a) 176-205 KIAS", "b) 205 KIAS", "c) 74-176 KIAS", "d) 64-110 KIAS"],
    "correct": 2
  },
  {
    "question": "26. The caution range (VNO-VNE), indicated by a yellow arc, covers which speeds?",
    "options": ["a) 64-110 KIAS", "b) 205 KIAS", "c) 74-176 KIAS", "d) 176-205 KIAS"],
    "correct": 3
  },
  {
    "question": "27. What does the red line marking at 205 KIAS represent?",
    "options": ["a) Normal operating range (VS1-VNO)", "b) Start of the caution range (VNO)", "c) Full flap operating range (VSO-VFE)", "d) Never exceed speed (VNE)"],
    "correct": 3
  },
  {
    "question": "28. What is the rated horsepower of the powerplant at 2700 RPM?",
    "options": ["a) 2700 hp", "b) 1000 hp", "c) 310 hp", "d) 3000 hp"],
    "correct": 2
  }
];