
import { useState } from 'react';

const SpinnerComponent = () => { 

  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const spinnerClasses = () =>{
    // 'slide-in-blurred-top':showAnimation,'puff-out-center':!showAnimation
    let classes = 'spinner-overlay';
    // public show:boolean;
    // public showAnimation:boolean;
    // constructor( private spinnerService: SpinnerService ) { 
    //   this.spinnerService.show$.subscribe((show)=>{
    //     if(show){
    //       this.show=show;
    //       this.showAnimation=show;
    //     }else{
    //       this.showAnimation=show;
    //       setTimeout(() => {
    //         this.show=show;
    //       }, 800);        
    //     }
        
    //   })
    // }
    return classes
  }
    return (
      <>
        {
          !showSpinner ? (
            <div className={`${spinnerClasses}`}>
                <div className="spinner">
                  <div className="loader"></div>
                </div>
            </div>
          ) : null
        }  
      </>
    )
  }
  
  export default SpinnerComponent
  