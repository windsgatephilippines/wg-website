import React from 'react';

const PageHeader = ({pageName}) => {
    const pageNameLength = pageName.length;
  return (
    // Page Header Start
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white animated slideInRight">{pageName.slice(-1)}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb animated slideInRight mb-0">
                    {pageName.map((name,index) => (
                       
                        <li className={`breadcrumb-item ${pageNameLength == (index + 1) ? 'active' : ''}`}><a href="#">{name}</a></li>
                        
                    ))}
                    
                </ol>
            </nav>
        </div>
    </div>
    // Page Header End 
  )
}

export default PageHeader