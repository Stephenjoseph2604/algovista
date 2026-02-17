import React from 'react'
// import AlgoVista from './pages/Algovista'
import AlgoVistaRoadmap from './pages/AlgoVistaRoadmap'
import AlgoVistaTopics from './pages/AlogoVistaTopics'
import AlgoVistaProblems from './pages/AlgoVistaProblems'
import AlgoVistaLanding from './pages/AlgoVistaLanding.jsx'
import ProblemDetailsPage from './pages/ProblemDetailsPage.jsx'
const App = () => {

const problem = {
  "id": "two-sum",
  "title": "Two Sum",
  "topic": "Arrays",
  "difficulty": "Easy",
  "patterns": ["HashMap"],
  "companies": ["Amazon", "Google", "Microsoft"],
  "frequency": "High (90%+ interviews)",

  "statement": {
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input has exactly one solution, and you may not use the same element twice.",
    "signature": "function twoSum(nums: number[], target: number): number[]",
    "input": "nums = [2,7,11,15], target = 9",
    "output": "[0,1]",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9", 
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists"
    ]
  },

  "intuition": "Instead of checking every possible pair (O(n²)), store each number we've seen and instantly check if its complement exists using O(1) hash lookups.",

  "deepExplanation": {
    "paragraph": "The key insight is recognizing that for any number x at index i, we need target-x at some previous index j. Rather than searching the entire array for each x, we maintain a hashmap of all numbers seen so far. This transforms the problem from O(n²) pairwise comparisons to O(n) single-pass processing.",

    "steps": [
      {
        "step": 1,
        "title": "Initialize HashMap",
        "description": "Create empty hashmap to store {number: index} pairs for O(1) lookups",
        "visual": {
          "hashMap": {},
          "currentIndex": 0,
          "action": "Initialize data structure"
        }
      },
      {
        "step": 2,
        "title": "Single Pass Iteration",
        "description": "Loop through array once (i from 0 to n-1)",
        "visual": {
          "array": [2, 7, 11, 15],
          "highlightIndex": 0,
          "action": "Process each element sequentially"
        }
      },
      {
        "step": 3,
        "title": "Calculate Complement",
        "description": "For nums[i], compute needed = target - nums[i]",
        "visual": {
          "current": 2,
          "needed": 7,
          "formula": "needed = 9 - 2 = 7",
          "action": "Mathematical insight: x + y = target"
        }
      },
      {
        "step": 4,
        "title": "HashMap Lookup (O(1))",
        "description": "Check if needed exists in hashmap. If yes → return [hashmap[needed], i]",
        "visual": {
          "hashMap": {},
          "lookup": 7,
          "found": false,
          "action": "Instant lookup vs linear search"
        }
      },
      {
        "step": 5,
        "title": "Store Current Number",
        "description": "hashMap[nums[i]] = i (store before processing next)",
        "visual": {
          "hashMap": { "2": 0 },
          "store": { "2": 0 },
          "action": "Build lookup table progressively"
        }
      },
      {
        "step": 6,
        "title": "Solution Found!",
        "description": "At index 1: nums[1]=7, needed=2 exists at index 0 → return [0,1]",
        "visual": {
          "hashMap": { "2": 0 },
          "current": 7,
          "needed": 2,
          "found": true,
          "solution": [0, 1]
        }
      }
    ]
  },

  "approaches": [
    {
      "type": "Brute Force",
      "description": "Nested loops checking every pair (i,j) where i < j",
      "timeComplexity": "O(n²)",
      "spaceComplexity": "O(1)",
      "codeSnippet": "for i in 0..n-1:\n  for j in i+1..n-1:\n    if nums[i]+nums[j] == target:\n      return [i,j]",
      "whyNotPreferred": "TLE on arrays > 10^4 elements (interview constraint)"
    },
    {
      "type": "HashMap (Optimal)",
      "description": "Single pass with hashmap storing {number: index}",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(n)",
      "keyInsight": "Trade O(n) space for O(1) lookups eliminates nested loops",
      "recommended": true
    }
  ],

  "solutions": {
    "javascript": {
      "code": "var twoSum = function(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const needed = target - nums[i];\n    if (map.has(needed)) {\n      return [map.get(needed), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n};"
    },
    "java": {
      "code": "public int[] twoSum(int[] nums, int target) {\n  Map<Integer, Integer> map = new HashMap<>();\n  for (int i = 0; i < nums.length; i++) {\n    int needed = target - nums[i];\n    if (map.containsKey(needed)) {\n      return new int[]{map.get(needed), i};\n    }\n    map.put(nums[i], i);\n  }\n  return new int[]{};\n}"
    },
    "python": {
      "code": "def twoSum(nums, target):\n  seen = {}\n  for i, num in enumerate(nums):\n    needed = target - num\n    if needed in seen:\n      return [seen[needed], i]\n    seen[num] = i\n  return []"
    }
  },

  "complexity": {
    "time": "O(n)",
    "space": "O(n)", 
    "explanation": "Single pass through array with O(1) hash operations per element",
    "whyOptimal": "Linear time/space is best possible for this problem"
  },

  "visualization": {
    "type": "array-hashmap",
    "initialState": {
      "array": [2, 7, 11, 15],
      "target": 9,
      "hashMap": {}
    },
    "steps": [
      {
        "step": 1,
        "index": 0,
        "current": 2,
        "needed": 7,
        "hashMap": {},
        "action": "Store 2:0",
        "status": "continue"
      },
      {
        "step": 2, 
        "index": 1,
        "current": 7,
        "needed": 2,
        "hashMap": {"2": 0},
        "action": "Found pair [0,1]",
        "status": "solved"
      }
    ]
  },

  "interviewNotes": {
    "commonMistakes": [
      "Returning values instead of indices",
      "Using nested loops O(n²)",
      "Not handling negative numbers",
      "Storing after lookup (misses current solution)"
    ],
    "mustTestCases": [
      "Negative numbers: nums=[-1,-2,-3,-4], target=-3",
      "Zero target: nums=[3,2,4], target=0", 
      "Duplicates: nums=[3,3], target=6"
    ],
    "followUpQuestions": [
      "What if array was sorted? (Two pointers O(n))",
      "What if >1 solution exists? (return all pairs)",
      "What if cannot use extra space? (sort+two pointers)"
    ],
    "explainInInterview": "We use hashmap for O(1) lookups. For each nums[i], check if target-nums[i] exists in map. If yes return indices, else store nums[i]:i. Single pass guarantees O(n) time.",
    "timeToSolve": "3-5 minutes (Easy)"
  },

  "references": {
    "leetcode": "https://leetcode.com/problems/two-sum/",
    "neetCode": "https://neetcode.io/problems/two-sum",
    "relatedProblems": [
      {"title": "Two Sum II (Sorted)", "difficulty": "Medium", "link": "/problems/two-sum-ii"},
      {"title": "3Sum", "difficulty": "Medium", "link": "/problems/3sum"},
      {"title": "4Sum", "difficulty": "Medium", "link": "/problems/4sum"}
    ]
  }
}


  return (
    <>
     {/* <AlgoVista/> */}
     <AlgoVistaLanding/>
     <AlgoVistaRoadmap/>
     <AlgoVistaTopics/>
     <AlgoVistaProblems/>
     <ProblemDetailsPage problem={problem}/>
    </>
  )
}

export default App
