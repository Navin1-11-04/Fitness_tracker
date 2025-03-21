import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "@progress/kendo-react-layout";
import { Fade } from "@progress/kendo-react-animation";

const quickTips = [
  "Optimize images for faster loading.",
  "Use semantic HTML for better accessibility.",
  "Minimize CSS and JavaScript to improve performance.",
  "Enable caching to speed up page loads."
];

const QuickTipsCard = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % quickTips.length);
    }, 3000); // Change tip every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-40 w-full">
      <Fade>
        <Card key={currentTipIndex} className="w-80 shadow-lg p-4 bg-white rounded-lg">
          <CardHeader>
            <CardTitle>Quick Tip</CardTitle>
          </CardHeader>
          <CardBody>
            <p className="text-gray-700">{quickTips[currentTipIndex]}</p>
          </CardBody>
        </Card>
      </Fade>
    </div>
  );
};

export default QuickTipsCard;
