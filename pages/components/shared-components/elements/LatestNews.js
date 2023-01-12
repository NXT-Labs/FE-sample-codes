import Image from 'next/image'
const LatestNews = () =>{
  return(
    <>
      <h3 className="featured-heading alt">LATEST NEWS</h3>
      <div className="latest-news">
        {/* news box */}
        <div className="news--box">
          <div className="news-img">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/news-1.png" 
              alt="news thumbnail" 
              layout='responsive'
              width={'330px'}
              height={'308px'} 
            />
          </div>
         
          <div className="news--excerpt">
            <div className="news--meta">
              <h4>Lorem ipsum dolor sit amet, consectetur</h4>
              <span>June 19</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
        </div>

        {/* news box */}
        <div className="news--box">
          <div className="news-img">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/news-2.png" 
              alt="news thumbnail" 
              layout='responsive'
              width={'330px'}
              height={'308px'} 
            />
          </div>
         
          <div className="news--excerpt">
            <div className="news--meta">
              <h4>Lorem ipsum dolor sit amet, consectetur</h4>
              <span>June 19</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
        </div>

        {/* news box */}
        <div className="news--box">
          <div className="news-img">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/news-3.png" 
              alt="news thumbnail" 
              layout='responsive'
              width={'330px'}
              height={'308px'} 
            />
          </div>
         
          <div className="news--excerpt">
            <div className="news--meta">
              <h4>Lorem ipsum dolor sit amet, consectetur</h4>
              <span>June 19</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
        </div>
        
      </div>
    </>
   
  )
}

export default LatestNews;