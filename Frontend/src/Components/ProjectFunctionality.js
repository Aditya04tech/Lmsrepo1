const [cart, setCart] = useState([]);
const [cartCount, setCartCount] = useState(0);
const navigate = useNavigate();

useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    setCart(JSON.parse(savedCart));
    localStorage.removeItem("cart");
  }
}, []);

useEffect(() => {
  // Update cart count whenever the cart state changes
  setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
}, [cart]);

const handleAddToCart = (product) => {
  const existsInCart = cart.find((item) => item.id === product.id);
  if (existsInCart) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const handleAdd = (product) => {
  setCart(
    cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const handleRemove = (product, isDelete = false) => {
  if (isDelete) {
    setCart(cart.filter((item) => item.id !== product.id));
  } else {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }
};

const handleClearCart = () => {
  setCart([]);
};

const handleLogout = () => {
  localStorage.removeItem("token");
  setCart([]);
  window.location.reload();
  navigate("/");
};