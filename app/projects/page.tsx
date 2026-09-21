'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { VERIFIED_PROJECTS } from '@/lib/company-data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  const { isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeFilter, setActiveFilter] = useState<'All' | 'Completed' | 'In Progress'>('All');

  const filterTabs: { id: 'All' | 'Completed' | 'In Progress'; labelEn: string; labelAr: string }[] = [
    { id: 'All', labelEn: 'All', labelAr: 'الكل' },
    { id: 'Completed', labelEn: 'Completed', labelAr: 'مكتمل' },
    { id: 'In Progress', labelEn: 'In Progress', labelAr: 'قيد التنفيذ' },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((p) => p.status === activeFilter);

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Projects Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
              {isAr ? 'المشاريع وسجل الأعمال • عقار لاند' : 'PROJECT PORTFOLIO • AQAR LAND'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr ? 'أعمال ومشاريع عقار لاند' : 'Documented Projects & Works'}
            </h1>
            <p className="text-base sm:text-lg text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed pt-2">
              {isAr
                ? 'مجموعة من مشاريع البناء السكني والتعديلات المعمارية الموثقة المنفذة بواسطة مؤسسة عقار لاند.'
                : 'A selection of documented residential construction and architectural modification works delivered by AQAR LAND.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Restrained Filters Bar: All, Completed, In Progress */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] sticky top-20 z-40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 overflow-x-auto py-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-max">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all border focus-visible:outline-2 focus-visible:outline-[#B84D28] ${
                    isActive
                      ? 'border-[#B84D28] bg-[#B84D28] text-white'
                      : 'border-[#E2DED6] dark:border-[#2C2F33] bg-transparent text-[#2C2F33] dark:text-[#E2DED6] hover:border-[#B84D28] hover:text-[#A8421D] dark:hover:text-[#E2774E]'
                  }`}
                >
                  {isAr ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Editorial Portfolio Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-sm text-[#3B3E42] dark:text-[#DCD8CF]">
              {isAr ? 'لا توجد مشاريع في هذا التصنيف حالياً.' : 'No projects found in this category.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredProjects.map((project, idx) => {
                const isFeatured = idx === 0 && activeFilter === 'All';
                const isCompleted = project.status === 'Completed';

                return (
                  <div
                    key={project.id}
                    className={`border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 flex flex-col ${
                      isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    {/* Architectural Image */}
                    <div
                      className={`relative w-full overflow-hidden bg-[#2C2F33] ${
                        isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={isAr ? 'مشروع سكني — عقار لاند' : 'AQAR LAND residential project'}
                        fill
                        sizes={isFeatured ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 start-4 bg-[#F7F5F0]/95 dark:bg-[#181A1B]/95 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#A8421D] dark:text-[#E2774E] font-semibold">
                        {isAr ? project.statusAr : project.statusEn}
                      </div>
                    </div>

                    {/* Metadata & Narrative */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          <span
                            className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold border ${
                              isCompleted
                                ? 'border-[#3B6676]/40 dark:border-[#8EBDD0]/40 text-[#2D5362] dark:text-[#8EBDD0] bg-[#3B6676]/10 dark:bg-[#8EBDD0]/10'
                                : 'border-[#A8421D]/40 dark:border-[#E2774E]/40 text-[#A8421D] dark:text-[#E2774E] bg-[#A8421D]/10 dark:bg-[#E2774E]/10'
                            }`}
                          >
                            {isAr ? project.statusAr : project.statusEn}
                          </span>
                          {project.year && (
                            <span className="inline-block px-2.5 py-0.5 text-[11px] border border-[#E2DED6] dark:border-[#2C2F33] text-[#3B3E42] dark:text-[#DCD8CF]">
                              {project.year}
                            </span>
                          )}
                          {project.value && (
                            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold text-[#A8421D] dark:text-[#E2774E] bg-[#A8421D]/10 dark:bg-[#E2774E]/10 border border-[#A8421D]/20 dark:border-[#E2774E]/20">
                              {isAr ? (project.valueAr || project.value) : project.value}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-snug">
                          {isAr ? project.titleAr : project.titleEn}
                        </h3>
                      </div>

                      <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] flex items-center justify-between">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8421D] dark:text-[#E2774E] hover:text-[#8F3514] dark:hover:text-[#F39169] transition-colors"
                        >
                          <span>{isAr ? 'طلب استشارة مماثلة' : 'Request Consultation'}</span>
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. Bottom Project Submission Callout */}
      <section className="py-20 lg:py-24 bg-[#EFECE6] dark:bg-[#181A1B] border-t border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
            {isAr ? 'تقديم المخططات والمواصفات' : 'PROJECT CONSULTATION'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] max-w-3xl mx-auto">
            {isAr ? 'شاركنا متطلبات ومخططات مشروعك' : 'Review Blueprints & Project Requirements'}
          </h2>
          <p className="text-sm sm:text-base text-[#3B3E42] dark:text-[#DCD8CF] max-w-2xl mx-auto font-sans leading-relaxed">
            {isAr
              ? 'تفضل بالتواصل مع فريقنا في أبوظبي لمراجعة المخططات الهندسية وتقديم المقترح المناسب.'
              : 'Submit your architectural blueprints and project specifications for an evaluation by our Abu Dhabi engineering team.'}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#B84D28] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#A33F1D] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            >
              <span>{isAr ? 'تواصل معنا' : 'Get In Touch'}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
