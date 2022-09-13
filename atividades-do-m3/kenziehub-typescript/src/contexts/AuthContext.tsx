import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  registerToast,
  registerErrorToast,
  loginToast,
  loginErrorToast,
  logOutToast,
  deleteToast,
  editToast,
  createToast,
  createErrorToast,
} from "../components/Toasts";
import { userLogin } from "../services/userLogin";
import { autoLoad } from "../services/autoLoad";
import { INewTechPostId, saveTech } from "../services/saveTech";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface INewTech {
  title: string;
  status: string;
}

export type IEditTech = Omit<INewTech, "title">;

interface IAuthContext {
  user: IUser | null;
  techs: ITech[];
  tech: ITech | null;
  setTech: Dispatch<SetStateAction<ITech | null>>;
  loading: Boolean;
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  logIn: (data: IUserLogin) => void;
  logOut: () => void;
  registerUser: (data: IUserRegister) => void;
  saveNewTech: (data: INewTech) => void;
  editTech: (status: IEditTech) => void;
  deleteTech: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<ITech[] | []>([]);
  const [tech, setTech] = useState<ITech | null>(null);
  const [modal, setModal] = useState<string | null>(null);

  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@kenzie-hub:token");

    if (token) {
      try {
        const data = await autoLoad();
        setUser(data);
        setTechs(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function logIn(data: IUserLogin): Promise<void> {
    userLogin(data)
      .then((response) => {
        setUser(response.user);
        setTechs(response.user.techs);

        localStorage.setItem("@kenzie-hub:token", response.token);

        navigate("/dashboard", { replace: true });
        loginToast();
      })
      .catch((error) => loginErrorToast());
  }

  function logOut(): void {
    setUser(null);
    localStorage.clear();
    logOutToast();
  }

  async function registerUser(data: IUserRegister): Promise<void> {
    try {
      await api.post("/users", data);
      navigate(`/login`, { replace: true });
      registerToast();
    } catch (error) {
      registerErrorToast();
    }
  }

  async function saveNewTech(data: INewTech): Promise<void> {
    try {
      await saveTech(data);
      createToast();
      loadUser();
      setModal(null);
    } catch (error) {
      createErrorToast();
    }
  }

  async function editTech(status: IEditTech): Promise<void> {
    const token = localStorage.getItem("@kenzie-hub:token");
    try {
      await api.put<ITech>(`/users/techs/${tech?.id}`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      editToast();
      loadUser();
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech(): Promise<void> {
    const token = localStorage.getItem("@kenzie-hub:token");
    try {
      await api.delete<INewTechPostId>(`/users/techs/${tech?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await deleteToast();
      loadUser();
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        techs,
        tech,
        setTech,
        loading,
        modal,
        setModal,
        logIn,
        logOut,
        registerUser,
        saveNewTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
