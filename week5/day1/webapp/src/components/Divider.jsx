// export default function Divider() {
//     return (
//       <div>
//         <hr />
//       </div>
//     );
//   }

export default function Divider(props) {
  return (
    <div className="section">
      <p>{props.section}</p>
      <hr />
    </div>
  );
}