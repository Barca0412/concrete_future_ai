import React from 'react';

const ServiceCapabilities = () => {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* 背景装饰 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #D97757 0%, transparent 70%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* 标题 */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl lg:text-6xl mb-8 font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#0A0A0A', lineHeight: '1.2' }}
          >
            顶尖技术基因 × 亿级电商实战
            <br />
            <span style={{ color: '#D97757' }}>做最懂业务的AI技术派</span>
          </h2>
          <p 
            className="text-lg lg:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', lineHeight: '1.8' }}
          >
            拒绝『套壳』与『空谈』。<span style={{ fontWeight: '600' }}>炬象未来（310127HN）</span>不仅是国家级先进制造业集群认证企业，更是一支拥有<span style={{ color: '#D97757', fontWeight: '700' }}>CCF-A类顶会</span>（AI领域最高学术殿堂）论文发表实力的硬核技术团队。我们背靠国内顶尖互联网技术生态，将学术界的前沿算法与阿里巴巴生态的实战经验完美融合。
          </p>
        </div>

        {/* 3大信任支柱 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Block A: 硬核技术底座 */}
          <div 
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300"
            style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(217, 119, 87, 0.15) 0%, rgba(217, 119, 87, 0.05) 100%)'
                }}
              >
                <svg className="w-8 h-8" style={{ color: '#D97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: '#0A0A0A' }}
              >
                顶会学术与大厂生态
              </h3>
            </div>
            <p 
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: '#6B7280', lineHeight: '1.8' }}
            >
              发表多篇<span style={{ color: '#D97757', fontWeight: '600' }}>CCF-A类顶级会议论文</span>，与字节跳动(Coze)、飞书、影刀RPA深度技术协同，构建企业级AI护城河。
            </p>
          </div>

          {/* Block B: 官方权威背书 */}
          <div 
            className="bg-white rounded-2xl p-8 border border-orange-200 relative overflow-hidden"
            style={{ boxShadow: '0 8px 24px rgba(217, 119, 87, 0.12)' }}
          >
            {/* 推荐标签 */}
            <div 
              className="absolute top-0 right-0 px-4 py-1 text-xs font-bold text-white"
              style={{ 
                background: 'linear-gradient(135deg, #D97757 0%, #C96543 100%)',
                borderBottomLeftRadius: '12px'
              }}
            >
              官方认证
            </div>
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(217, 119, 87, 0.2) 0%, rgba(217, 119, 87, 0.08) 100%)'
                }}
              >
                <svg className="w-8 h-8" style={{ color: '#D97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: '#0A0A0A' }}
              >
                阿里官方双认证
              </h3>
            </div>
            <p 
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: '#6B7280', lineHeight: '1.8' }}
            >
              阿里巴巴官方认证<span style={{ color: '#D97757', fontWeight: '600' }}>『明星/钻石讲师』资质</span> + AI生意助手首批官方评测师（达人赛评委）。湖南股权交易所挂牌企业。
            </p>
          </div>

          {/* Block C: 现象级实战纪录 */}
          <div 
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300"
            style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(217, 119, 87, 0.15) 0%, rgba(217, 119, 87, 0.05) 100%)'
                }}
              >
                <svg className="w-8 h-8" style={{ color: '#D97757' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: '#0A0A0A' }}
              >
                一年赋能20,000+企业
              </h3>
            </div>
            <p 
              className="text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: '#6B7280', lineHeight: '1.8' }}
            >
              实战团队曾创下<span style={{ color: '#D97757', fontWeight: '600' }}>人效500万、业绩100%增长</span>纪录。不仅懂代码，更懂如何用代码帮你赚钱。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;