// src/utilities/problemToDocument.js
import jsPDF from 'jspdf';

export const generateProblemDocument = (problem) => {
  const doc = new jsPDF();
  const primaryColor = [43, 46, 51];
  const secondaryColor = [123, 127, 133];
  let yPosition = 20;
  let pageNumber = 1;

  // Helper function to add new page when needed
  const checkNewPage = (neededHeight) => {
    if (yPosition + neededHeight > 280) {
      doc.addPage();
      yPosition = 20;
      pageNumber++;
    }
  };

  // 1. HEADER
  checkNewPage(50);
  doc.setFillColor(...primaryColor);
  doc.roundedRect(20, yPosition, 170, 30, 5, 5, 'F');
  doc.setTextColor(245, 246, 247);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(problem.title.toUpperCase(), 30, yPosition + 20);
  yPosition += 40;

  // 2. Difficulty + Metadata
  checkNewPage(40);
  const difficultyColors = {
    Easy: [40, 167, 69],
    Medium: [255, 193, 7],
    Hard: [220, 53, 69]
  };
  const diffColor = difficultyColors[problem.difficulty] || [108, 117, 125];
  doc.setFillColor(...diffColor);
  doc.roundedRect(30, yPosition - 10, 40, 12, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(problem.difficulty, 38, yPosition - 2);

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`${problem.topic}`, 80, yPosition);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Pattern: ${problem.patterns.join(', ')}`, 80, yPosition + 7);
  doc.text(`Companies: ${problem.companies.join(', ')}`, 80, yPosition + 14);
  doc.setTextColor(...secondaryColor);
  doc.text(problem.frequency || 'High Frequency', 80, yPosition + 21);
  yPosition += 35;

  // 3. PROBLEM STATEMENT
  checkNewPage(60);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('PROBLEM STATEMENT', 30, yPosition);
  yPosition += 12;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...secondaryColor);
  const descLines = doc.splitTextToSize(problem.statement.description, 160);
  doc.text(descLines, 30, yPosition);
  yPosition += (descLines.length * 6) + 20;

  // 4. EXAMPLE
  checkNewPage(30);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('EXAMPLE', 30, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...primaryColor);
  doc.text('Input:', 35, yPosition);
  doc.setFont('courier', 'normal');
  doc.text(problem.statement.input, 55, yPosition);
  yPosition += 8;

  doc.setFont('helvetica', 'normal');
  doc.text('Output:', 35, yPosition);
  doc.setFont('courier', 'bold');
  doc.setTextColor(40, 167, 69);
  doc.text(problem.statement.output, 55, yPosition);
  yPosition += 20;

  // 5. CONSTRAINTS
  checkNewPage(50);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('CONSTRAINTS', 30, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...secondaryColor);
  problem.statement.constraints.slice(0, 10).forEach((constraint, i) => {
    checkNewPage(10);
    const lines = doc.splitTextToSize(constraint, 140);
    doc.text(['•', ...lines.slice(0, 2)], 35, yPosition);
    yPosition += lines.length * 6;
  });
  yPosition += 15;

  // 6. APPROACHES ✅ COMPLETE
  if (problem.approaches?.length > 0) {
    checkNewPage(80);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SOLUTION APPROACHES', 30, yPosition);
    yPosition += 12;

    problem.approaches.forEach((approach, i) => {
      checkNewPage(40);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      const status = approach.recommended ? ' ⭐ OPTIMAL' : '';
      doc.text(`${i + 1}. ${approach.type}${status}`, 35, yPosition);
      yPosition += 8;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(`Time: ${approach.timeComplexity}  |  Space: ${approach.spaceComplexity}`, 40, yPosition);
      yPosition += 6;

      const descLines = doc.splitTextToSize(approach.description, 140);
      doc.text(descLines, 40, yPosition);
      yPosition += descLines.length * 5 + 10;
    });
    yPosition += 10;
  }

  // 7. JAVASCRIPT SOLUTION ✅ COMPLETE WITH CODE BLOCK
  if (problem.solutions?.javascript) {
    checkNewPage(100);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text('JAVASCRIPT SOLUTION', 30, yPosition);
    yPosition += 15;

    // Code background box
    const jsCode = problem.solutions.javascript.code;
    const codeLines = doc.splitTextToSize(jsCode, 155);
    const codeHeight = codeLines.length * 4.5 + 20;
    checkNewPage(codeHeight / 0.75); // Estimate page height

    doc.setFillColor(248, 249, 250);
    doc.roundedRect(28, yPosition - 8, 164, codeHeight, 3, 3, 'F');
    
    doc.setFont('courier', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...secondaryColor);
    doc.text(codeLines, 32, yPosition);
    yPosition += codeHeight + 10;
  }

  // 8. ALL LANGUAGES SOLUTION ✅ COMPLETE
  const languages = Object.keys(problem.solutions || {});
  languages.forEach(lang => {
    if (lang !== 'javascript') {
      checkNewPage(80);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(`${lang.toUpperCase()} SOLUTION`, 30, yPosition);
      yPosition += 12;

      const langCode = problem.solutions[lang].code;
      const langCodeLines = doc.splitTextToSize(langCode, 155);
      const langHeight = langCodeLines.length * 4 + 15;
      
      doc.setFillColor(245, 247, 250);
      doc.roundedRect(28, yPosition - 5, 164, langHeight, 3, 3, 'F');
      
      doc.setFontSize(8);
      doc.setFont('courier', 'normal');
      doc.setTextColor(...secondaryColor);
      doc.text(langCodeLines, 32, yPosition);
      yPosition += langHeight + 15;
    }
  });

  // 9. COMPLEXITY
  checkNewPage(40);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('COMPLEXITY ANALYSIS', 30, yPosition);
  yPosition += 12;

  doc.setFillColor(240, 242, 245);
  doc.roundedRect(28, yPosition - 5, 164, 30, 3, 3, 'F');
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Time: ${problem.complexity?.time || 'O(n)'}   |   Space: ${problem.complexity?.space || 'O(n)'}`, 32, yPosition + 2);
  yPosition += 35;

  // 10. INTUITION (NEW)
  if (problem.intuition) {
    checkNewPage(40);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('KEY INTUITION', 30, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    const intuitionLines = doc.splitTextToSize(problem.intuition, 160);
    doc.text(intuitionLines, 35, yPosition);
    yPosition += intuitionLines.length * 5 + 20;
  }

  // 11. INTERVIEW NOTES ✅ COMPLETE
  checkNewPage(60);
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  doc.text('INTERVIEW PREPARATION', 30, yPosition);
  yPosition += 15;

  if (problem.interviewNotes?.commonMistakes?.length > 0) {
    checkNewPage(40);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('COMMON MISTAKES', 35, yPosition);
    yPosition += 10;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    problem.interviewNotes.commonMistakes.slice(0, 8).forEach((mistake, i) => {
      checkNewPage(10);
      doc.text(`• ${mistake}`, 40, yPosition + i * 6);
    });
    yPosition += 30;
  }

  if (problem.interviewNotes?.explainInInterview) {
    checkNewPage(40);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PERFECT EXPLANATION', 35, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    const explanationLines = doc.splitTextToSize(problem.interviewNotes.explainInInterview, 150);
    doc.text(explanationLines, 40, yPosition);
    yPosition += explanationLines.length * 5 + 20;
  }

  // 12. FOOTER on EVERY PAGE
  doc.setFillColor(240, 242, 245);
  doc.roundedRect(20, 285, 170, 10, 3, 3, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...secondaryColor);
  doc.text(`${problem.title} - Page ${pageNumber} | ${new Date().toLocaleDateString()}`, 30, 290);

  const fileName = `${problem.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_complete_solution.pdf`;
  doc.save(fileName);
  return fileName;
};
