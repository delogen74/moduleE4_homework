class ElectricAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.name} включен.`);
        } else {
            console.log(`${this.name} уже включен.`);
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.name} выключен.`);
        } else {
            console.log(`${this.name} уже выключен.`);
        }
    }
}

class Lamp extends ElectricAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness; 
    }

    adjustBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Яркость ${this.name} установлена на ${this.brightness} люмен.`);
    }
}

class Computer extends ElectricAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installSoftware(softwareName) {
        console.log(`Программное обеспечение "${softwareName}" установлено на ${this.brand} ${this.name}.`);
    }
}

const deskLamp = new Lamp('Настольная лампа', 60, 800);
const gamingComputer = new Computer('Игровой компьютер', 450, 'Alienware');

// Включение приборов
deskLamp.turnOn();
gamingComputer.turnOn();

deskLamp.adjustBrightness(1000);
gamingComputer.installSoftware('Cyberpunk 2077');

const appliances = [deskLamp, gamingComputer];
const totalPower = appliances.reduce((total, appliance) => {
    return appliance.isOn ? total + appliance.power : total;
}, 0);

console.log(`Общая потребляемая мощность: ${totalPower} Вт`);

deskLamp.turnOff();
gamingComputer.turnOff();

const totalPowerAfter = appliances.reduce((total, appliance) => {
    return appliance.isOn ? total + appliance.power : total;
}, 0);

console.log(`Потребляемая мощность после выключения: ${totalPowerAfter} Вт`);
