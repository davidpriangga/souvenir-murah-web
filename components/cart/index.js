import { Drawer, List, Button, InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";

const Cart = ({ open, onClose }) => {
  const { items, removeItem, isEmpty, updateItemQuantity } = useCart();
  const { push } = useRouter();

  const handleDelete = (item) => {
    removeItem(item.id);
  };

  const handleCheckout = () => {
    push("/checkout");
    onClose();
  };

  return (
    <Drawer
      title="Keranjang"
      size="large"
      placement="right"
      onClose={onClose}
      open={open}
      footer={
        !isEmpty ? (
          <div style={{ justifyContent: "flex-end", display: "flex" }}>
            <Button type="primary" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        ) : null
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                danger
                onClick={() => {
                  handleDelete(item);
                }}
                icon={<DeleteOutlined />}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <img
                  width={80}
                  height={80}
                  style={{ objectFit: "cover", borderRadius: 5 }}
                  src={item.images[0].url}
                  alt="product img"
                />
              }
              title={item.title}
              description={`RP ${item.price}`}
            />
            <InputNumber
              min={1}
              value={item.quantity}
              onChange={(value) => {
                updateItemQuantity(item.id, value);
              }}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
};
export default Cart;
