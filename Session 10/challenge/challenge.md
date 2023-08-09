# Session 10 Challenge

## Gestión de Nómina y Pagos

### Descripción:

Se te ha encargado crear un sistema simple de gestión de nómina y pagos para los empleados de una empresa.

La empresa paga a sus empleados en base a sus días trabajados. La empresa hace este cálculo dividiendo el `salario mensual` entre `30`, y multiplicando el resultado por cada dia trabajado.

La empresa paga el aguinaldo a sus empleados dividiendo el `salario mensual` entre `2`. El aguinaldo no contempla otro valor ni bono extra, solo el salario mensual.

La empresa cuenta con 3 tipos de empleados:

- Empleado: Tiene un `salario mensual`.
- Contractor: Tiene un `salario mensual` y una `tarifa por día`, que le asegura un pago extra por cada dia trabajado, además de su salario mensual.
- Practicante: Tiene un `salario mensual` fijo de `$5000` pesos, más un `apoyo educativo` que se le paga independientemente de los dias trabajados. Este monto puede variar de practicante a practicante.

Todos los empleados deben ser registrados con `nombre` y `apellido`.

### Instrucciones:

- Crea clases para cada tipo de empleado.
- Utilizando el concepto de `herencia`, determina cual sería la mejor manera de reutilizar código, ya sea utilizando una nueva clase como padre, o utilizando alguna de las ya existentes.
- Genera un método llamado `calcularSalario()` para cada tipo de empleado, que tome como parámetro los `días trabajados` del empleado. Tomando la descripción de arriba, haz que el método imprima el `nombre`, el `apellido`, y el total de su salario tomando en cuenta los `dias trabajados` y cualquier otro bono en caso de que aplique.
- Todos los tipos de empleado tienen acceso al `aguinaldo`, y este se paga de la misma manera para todos. Tomando la descripción de arriba, genera un método que imprima el `nombre`, el `apellido`, y el total de su `aguinaldo` correspondiente. (si haces bien tu herencia, solo tendrás que declararlo una vez)

Prueba tu código agregando, eliminando y verificando el inventario en diferentes escenarios.

**Ejemplo de Uso:**

```js
// Crear instancias y probar el código
const elContractor = new Contractor("Juan", "Pérez", 8000, 700);
const elPracti = new Practicante("María", "Gómez", 1000);
const elSenior = new Empleado("Francisco", "Ramirez", 40000);

elContractor.calcularSalario(30);
// El salario de Juan Pérez por 30 dias trabajados es $29000 MXN

elContractor.calcularAguinaldo();
// El aguinaldo de Juan Pérez es $4000 MXN

elPracti.calcularSalario(30);
// El salario de María Gómez por 30 dias trabajados es $6000 MXN

elPracti.calcularAguinaldo();
// El aguinaldo de María Gómez es $2500 MXN

elSenior.calcularSalario(30);
// El salario de Francisco Ramirez por 30 dias trabajados es $40000 MXN

elSenior.calcularAguinaldo();
// El aguinaldo de Francisco Ramirez es $20000 MXN
```

**Extra Challenge**

Utilizando lo que aprendiste en la Sesión 10, separa tus cláses en `módulos` en diferentes archivos, para empezar a segmentar el sistema.
