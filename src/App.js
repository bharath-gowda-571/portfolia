import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className='page-1'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Spline scene="https://prod.spline.design/Q2-tZ1GquVlSdMZF/scene.splinecode" style={{width:"100%",height:"100%"}}/>  
    </div>
  );
}
