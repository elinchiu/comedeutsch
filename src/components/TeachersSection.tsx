import React from 'react';
import { TEACHERS_DATA } from '../data/teachersData';
import { CheckCircle2 } from 'lucide-react';

interface TeachersSectionProps {
  onOpenLineModal: () => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = () => {
  return (
    <section id="teachers" className="py-20 sm:py-24 bg-[#faf9f6] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="teachers-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight"
          >
            專業師資陣容
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            嚴選具備德國教學認證 (DaF) 與頂尖學歷名師，融合母語自然語感與台灣學生痛點教學。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEACHERS_DATA.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-neutral-100 border border-neutral-200">
                    <img
                      src={teacher.avatarUrl}
                      alt={teacher.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{teacher.name}</h3>
                    <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                      {teacher.title}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic bg-neutral-50 p-3 rounded-xl border border-neutral-100 mb-5">
                  "{teacher.intro}"
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-neutral-600">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    資歷認證
                  </span>
                  {teacher.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
