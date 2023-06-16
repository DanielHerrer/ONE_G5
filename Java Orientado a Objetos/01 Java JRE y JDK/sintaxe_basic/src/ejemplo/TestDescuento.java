package ejemplo;

public class TestDescuento {

	public static void main(String[] args) {
		
		double valorCompra = 250.0;
        double descuento = 0.0;
        double valorFinal = 0.0;
        
        if (valorCompra >= 100.0 && valorCompra < 200.0) {
            descuento = 10.0;
            valorFinal = valorCompra - (valorCompra * 0.1);
        } else if (valorCompra >= 200.0 && valorCompra < 300.0) {
            descuento = 15.0;
            valorFinal = valorCompra - (valorCompra * 0.15);
        } else if (valorCompra >= 300.0) {
            descuento = 20.0;
            valorFinal = valorCompra - (valorCompra * 0.20);
        }

        System.out.println("Valor de la compra: $" + valorCompra);
        System.out.println("Descuento: " + descuento + "%");
        System.out.println("Valor final: $" + valorFinal);

	}

}
