//Scroller / Spinner for picture 
// export async for preload
/**
 * array of urls => return promise resolves when all pictures are loaded
 */
 export async function cachePictures(pictures, setIsLoading) {
    const promises = pictures.map((url, i) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.addEventListener('load', resolve)
            img.addEventListener('error', reject)
        });
    });
    await Promise.all(promises);
    setIsLoading(false);
}

function Scroller() {
    return (
        <div className="Scroller">
			<div className="scroll1"></div>
			<div className="scroll2"></div>
		</div>
    );
}

export default Scroller;