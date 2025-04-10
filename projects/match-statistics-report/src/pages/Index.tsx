
import React from 'react';
import Header from '@/components/Header';
import MatchDetails from '@/components/MatchDetails';
import StatisticsCard from '@/components/StatisticsCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <h2 className="section-title">Match Report</h2>
        
        <div className="my-8">
          <div className="card-shadow rounded-lg bg-white overflow-hidden">
            <div className="aspect-[4/3] w-full md:aspect-[16/9] lg:aspect-[16/9]">
              <iframe 
                src="https://heyzine.com/flip-book/f73586773f.html" 
                className="w-full h-full border-0" 
                title="Match Report FlipBook" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        <h2 className="section-title mt-12">Match Overview</h2>
        
        <div className="my-8">
          <MatchDetails 
            homeTeam="Barcelona FC"
            awayTeam="Real Madrid"
            date="April 10, 2025"
            venue="Camp Nou, Barcelona"
            competition="La Liga"
            score="2 - 1"
          />
        </div>
        
        <h2 className="section-title mt-12">Key Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <StatisticsCard 
            title="Possession" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={62} 
            teamBValue={38}
            unit="%" 
          />
          
          <StatisticsCard 
            title="Shots" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={15} 
            teamBValue={9}
            unit="" 
          />
          
          <StatisticsCard 
            title="Shots on Target" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={7} 
            teamBValue={4}
            unit="" 
          />
          
          <StatisticsCard 
            title="Passes" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={583} 
            teamBValue={342}
            unit="" 
          />
          
          <StatisticsCard 
            title="Pass Accuracy" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={91} 
            teamBValue={84}
            unit="%" 
          />
          
          <StatisticsCard 
            title="Corners" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={8} 
            teamBValue={3}
            unit="" 
          />
          
          <StatisticsCard 
            title="Fouls" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={10} 
            teamBValue={14}
            unit="" 
          />
          
          <StatisticsCard 
            title="Yellow Cards" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={2} 
            teamBValue={4}
            unit="" 
          />
          
          <StatisticsCard 
            title="Expected Goals (xG)" 
            teamAName="Barcelona" 
            teamBName="Real Madrid"
            teamAValue={2.4} 
            teamBValue={1.2}
            unit="" 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
