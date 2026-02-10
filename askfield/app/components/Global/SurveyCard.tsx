"use client";

import React from 'react';
import Link from 'next/link';
import { Survey } from '@/data/surveysData';

interface SurveyCardProps {
  survey: Survey;
}

const SurveyCard: React.FC<SurveyCardProps> = ({ survey }) => {
  return (
    <Link href={`/surveys/${survey.id}`}>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Survey Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Ends in {survey.endsIn}
          </div>
          
          {/* Terminal/Code Display */}
          <div className="w-full h-full flex items-center justify-center p-6 overflow-hidden">
            <div className="text-sm font-mono space-y-1.5 w-full opacity-80">
              {/* Terminal header */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              
              {/* Code lines */}
              <div className="space-y-1">
                <div className="text-gray-500">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">survey</span>{' '}
                  <span className="text-pink-400">=</span> {'{'}
                </div>
                <div className="text-gray-500 ml-4">
                  <span className="text-green-300">id</span>: 
                  <span className="text-orange-400"> {survey.id}</span>,
                </div>
                <div className="text-gray-500 ml-4">
                  <span className="text-green-300">reward</span>: 
                  <span className="text-yellow-300">{survey.reward}</span>,
                </div>
                <div className="text-gray-500 ml-4">
                  <span className="text-green-300">duration</span>: 
                  <span className="text-yellow-300">{survey.duration}</span>
                </div>
                <div className="text-gray-500">{'};'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Survey Details */}
        <div className="p-5">
          {/* Reward & Duration */}
          <div className="flex items-center justify-between mb-3">
            <div className="bg-yellow-50 text-gray-900 font-bold text-sm px-3 py-1.5 rounded-md border border-yellow-200">
              NGN {survey.reward.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
            </div>
            <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {survey.duration}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-gray-900 font-semibold text-base mb-4 line-clamp-2 hover:text-purple-600 transition-colors">
            {survey.title}
          </h3>

          {/* Author Info */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 shadow-md">
              {survey.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                By {survey.author.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {survey.author.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SurveyCard;