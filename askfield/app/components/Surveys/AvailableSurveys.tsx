"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SurveyCard from '../Global/SurveyCard';
import { SURVEYS_DATA } from '../../lib/constants/surveys';

export default function AvailableSurveys() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available Surveys
            </h2>
            <p className="text-gray-600">
              Check out surveys tailored just for you and start earning rewards.
            </p>
          </div>
          <Link 
            href="/surveys" 
            className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors group"
          >
            See all
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Surveys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURVEYS_DATA.map((survey) => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </div>
      </div>
    </section>
  );
}
