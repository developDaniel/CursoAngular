using System;
using ServiceReference1;

namespace Disashop
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            ConsumirWebSevices();
        }

        private static void ConsumirWebSevices()
        {
            WSPITClient serv = new WSPITClient();
            testRequest tec = new testRequest();
            //testResponse rec;            

            tec.Body.entidad = "TACN";
            tec.Body.idCliente = "99154067";
            tec.Body.idTerminal = "59154067";
            tec.Body.referenciaCliente = "11130";


            serv.test(tec);




        }
    }
}
