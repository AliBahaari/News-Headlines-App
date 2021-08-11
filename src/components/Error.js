import '../styles/Error.css';

export default function Error(props) {
  return (
    <div className="Error">
      <span className="timesSign">×</span> { props.children }
    </div>
  );
}