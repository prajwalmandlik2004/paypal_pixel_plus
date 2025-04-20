import { jsPDF } from 'jspdf';

export const generatePDF = () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();
  
  // Add PayPal logo placeholder
  doc.setFontSize(22);
  doc.setTextColor(0, 48, 135); // PayPal blue
  doc.text("PayPal", 105, 20, { align: 'center' });
  
  // Add title
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("Financial Report", 105, 30, { align: 'center' });
  
  // Add date
  const today = new Date();
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${today.toLocaleDateString()}`, 105, 40, { align: 'center' });
  
  // Add account summary section
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Account Summary", 20, 60);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text("Available Balance:", 20, 70);
  doc.text("$2,547.89", 100, 70);
  
  doc.text("Pending Balance:", 20, 80);
  doc.text("$0.00", 100, 80);
  
  doc.text("Total Balance:", 20, 90);
  doc.text("$2,547.89", 100, 90);
  
  // Add spending summary section
  doc.setFontSize(16);
  doc.text("Spending Summary", 20, 110);
  
  doc.setFontSize(12);
  doc.text("Food & Dining:", 20, 120);
  doc.text("$523.42", 100, 120);
  
  doc.text("Shopping:", 20, 130);
  doc.text("$348.25", 100, 130);
  
  doc.text("Entertainment:", 20, 140);
  doc.text("$275.99", 100, 140);
  
  doc.text("Bills & Utilities:", 20, 150);
  doc.text("$312.87", 100, 150);
  
  doc.text("Transportation:", 20, 160);
  doc.text("$195.45", 100, 160);
  
  doc.text("Other:", 20, 170);
  doc.text("$185.24", 100, 170);
  
  // Add monthly overview
  doc.setFontSize(16);
  doc.text("Monthly Overview", 20, 190);
  
  doc.setFontSize(12);
  doc.text("Total Income:", 20, 200);
  doc.text("$4,235.12", 100, 200);
  
  doc.text("Total Expenses:", 20, 210);
  doc.text("$1,841.22", 100, 210);
  
  doc.text("Net Savings:", 20, 220);
  doc.text("$2,393.90", 100, 220);
  
  // Add AI insights
  doc.setFontSize(16);
  doc.text("AI Financial Insights", 20, 240);
  
  doc.setFontSize(12);
  doc.text("• Your spending on Entertainment increased by 45% this month", 20, 250);
  doc.text("• You could increase your monthly savings by $350", 20, 260);
  doc.text("• At your current rate, you'll have $580 left at month end", 20, 270);
  
  // Save the PDF
  doc.save('paypal-financial-report.pdf');
  
  return true;
};