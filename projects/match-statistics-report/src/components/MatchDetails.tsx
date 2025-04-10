
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface MatchDetailsProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  venue: string;
  competition: string;
  score: string;
}

const MatchDetails: React.FC<MatchDetailsProps> = ({
  homeTeam,
  awayTeam,
  date,
  venue,
  competition,
  score
}) => {
  return (
    <Card className="card-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-brand-darkBlue">{homeTeam}</h3>
            <p className="text-brand-gray text-sm">Home</p>
          </div>

          <div className="text-center my-4 md:my-0">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-brand-darkBlue">{score}</span>
            </div>
            <p className="text-brand-gray text-sm mt-2">{date}</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-brand-darkBlue">{awayTeam}</h3>
            <p className="text-brand-gray text-sm">Away</p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-brand-gray">Venue</p>
            <p className="font-medium">{venue}</p>
          </div>
          <div>
            <p className="text-sm text-brand-gray">Competition</p>
            <p className="font-medium">{competition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchDetails;
