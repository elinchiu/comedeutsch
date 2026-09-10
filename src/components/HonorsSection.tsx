import React from 'react';
import { Award, Trophy } from 'lucide-react';

export const HonorsSection: React.FC = () => {
  const honorsList = [
    {
      student: '林同學 (國立成功大學)',
      achievement: 'TestDaF 德福 18 分高分（聽 5 / 讀 5 / 寫 4 / 說 4）',
      university: '錄取 慕尼黑工業大學 (TUM) 機械工程碩士',
      period: '歷時 8 個月從 A2 直奔德福',
    },
    {
      student: '陳同學 (外商軟體工程師)',
      achievement: '歌德檢定 Goethe-Zertifikat B2 高分一次通過',
      university: '成功獲得德國柏林知名科技公司 Job Offer & 藍卡',
      period: '利用週末與夜間線上一對一輔導',
    },
    {
      student: '黃同學 (台北醫學大學)',
      achievement: '歌德檢定 Goethe-Zertifikat B1 滿分聽說成績',
      university: '錄取 海德堡大學 (Heidelberg) 交換研究生',
      period: '扎實完成康德 A1-B1 模組課程',
    },
    {
      student: '張同學 (建築設計師)',
      achievement: '歌德檢定 Goethe-Zertifikat A2 92分優等成績',
      university: '錄取 威瑪包浩斯大學 (Bauhaus-Uni Weimar)',
      period: '零基礎出發，4 個月順利達標',
    },
  ];

  return (
    <section id="honors" className="py-20 sm:py-24 bg-[#fff0f0] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffcdcd] text-[#7a1c1c] text-xs font-bold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              檢定考照與名校金榜
            </div>
            <h2
              id="honors-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
            >
              榮譽榜・成就不凡的德語實力
            </h2>
          </div>
          <p className="text-sm text-neutral-700 max-w-md">
            我們以學員的具體成果為傲。每年輔導數十位同學克服檢定瓶頸，如願踏上德國求學與職場新旅程。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {honorsList.map((honor, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#fce9e9] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#ffcdcd] shadow-xs hover:shadow-sm transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#e63946] font-bold">PASS 檢定金榜</span>
                  <Award className="w-5 h-5 text-[#e63946]" />
                </div>
                <h4 className="font-bold text-base text-neutral-900">{honor.student}</h4>
                <div className="mt-3 p-2.5 rounded-lg bg-[#fff8f8] border border-[#ffcdcd] text-xs font-bold text-[#b51722] leading-snug">
                  {honor.achievement}
                </div>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  🎯 {honor.university}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#fce9e9] text-[11px] text-neutral-500">
                {honor.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
