import { Jumbotron, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

toast.configure();

const Profile = (props) => {
  const { id } = useParams();

  const handleOnClick = (event) => {
    event.preventDefault();
    toast.success("Notification déclenchée");
  };

  return (
    <Jumbotron>
      <h1>Mon profile</h1>
      <p>{id ? `Bienvenu utilisateur ${id}` : "Connectez vous"}</p>
      <p>
        <Button variant="success" onClick={handleOnClick}>
          Declencher une notif
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Profile;
