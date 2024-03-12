const DatePicker = ({ onSelectDate }) => {
    return (
      <input type="date" onChange={(e) => onSelectDate(e.target.value)} className="p-2" />
    );
  };
  