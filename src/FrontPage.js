function FrontPage()
{
    return(
        <div>
            <h1> 
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', width : '1000px',height: '1000px', border: '1px solid green'}} >
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'stretch', width : '1000px',height: '1000px', border: '1px solid green'}}>
      <ResizableBox width={200} height={200} minConstraints={[50, 50]} maxConstraints={[Infinity, 1000]} resizeHandles={['e', 's', 'w', 'n']} onResizeStop={handleResizeStop} style={{margin: '0'}}>
        <div style={{width: '100%', height: '100%', border: '1px solid black'}}>Hi</div>
      </ResizableBox>
      <ResizableBox width={200} height={200} minConstraints={[50, 50]} maxConstraints={[Infinity, 1000]} resizeHandles={['e', 's', 'w', 'n']} onResizeStop={handleResizeStop} style={{margin: '0'}}>
        <div style={{width: '100%', height: '100%', border: '1px solid black'}}>Hi</div>
      </ResizableBox>
      


      
    </div>
    <ResizableBox width={200} height={200} minConstraints={[50, 50]} maxConstraints={[Infinity, 1000]} resizeHandles={['e', 's', 'w', 'n']} onResizeStop={handleResizeStop} style={{margin: '0'}}>
        <div style={{width: '100%', height: '100%', border: '1px solid black'}}>Hi</div>
      </ResizableBox>
    </div>
            </h1>
        </div>
    )
}

export default FrontPage