import os
import subprocess
import sys

"""Modulo subprocess es la mejora de os como tal se puede mantener todo junto, Metodos como Popen reciben las instrucciones en forma de array (LISTAS)"""


## https://rico-schmidt.name/pymotw-3/subprocess/index.html

def EjecutarServidores():
    os.chdir("./project") # Cambiar directorio
    subprocess.Popen(["node","server.cjs"],shell=True)


def EjecutarVite():
    print("Iniciando Vite...") # Aqui no se cambia de directorio porque ya estamos dentro, asi que npm - run - dev deberia de funcionar si problemas
    subprocess.Popen(["npm", "run", "dev"], shell=True) 



try:
    print("-----------------------------------------------------------------------")
    EjecutarServidores()
    EjecutarVite()
except KeyboardInterrupt:
    sys.exit()
    print("Cerrado por Control + C")
except ChildProcessError:
    print("Processos error")
    sys.exit()
except Exception as e:
    print(f"Tu error fue: {e}")
    sys.exit()
print("-----------------------------------------------------------------------")
sys.exit()

