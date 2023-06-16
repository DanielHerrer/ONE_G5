package ejemplo;

public class TestCondicional {

	public static void main(String[] args) {
		
		System.out.println("probando condicionales");

        int edad = 20;
        int cantidadPersonas = 3;

        if (edad >= 18) {
            System.out.println("Tienes más de 18 años");
            System.out.println("Bienvenido ");
        } else {
            if (cantidadPersonas >= 2) {
                System.out.println("No tienes 18 años, pero puedes ingresar, "+
                						"porque estás acompañado");
            } else {
                System.out.println("Lamentablemente no puedes ingresar");
            }
        }

	}

}
