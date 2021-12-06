export default function User(props) {
  return (
    <div class="usuario">
      <img alt="" src={props.src} />
      <div class="texto">
        <strong>props.userNick</strong>
        {props.userName}
      </div>
    </div>
  );
}
