
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface StatisticsCardProps {
  title: string;
  teamAName: string;
  teamBName: string;
  teamAValue: number;
  teamBValue: number;
  unit?: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  teamAName,
  teamBName,
  teamAValue,
  teamBValue,
  unit = '%'
}) => {
  const total = teamAValue + teamBValue;
  const teamAPercentage = total > 0 ? (teamAValue / total) * 100 : 50;
  
  return (
    <Card className="card-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-brand-darkBlue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">{teamAName}</span>
          <span className="text-sm font-medium">{teamBName}</span>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold text-brand-blue">{teamAValue}{unit}</span>
          <span className="text-2xl font-bold text-brand-gray">{teamBValue}{unit}</span>
        </div>
        
        <div className="relative pt-2">
          <div className="flex h-2 mb-4">
            <div 
              className="bg-brand-blue rounded-l" 
              style={{ width: `${teamAPercentage}%` }} 
            />
            <div 
              className="bg-brand-gray rounded-r" 
              style={{ width: `${100 - teamAPercentage}%` }} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
