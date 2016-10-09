//Classes encapsulates functions and properties which are related and that can be reused
class Car {
    engine : string;
    private _number : number;

    constructor(engine: string) {
        this.engine = engine;
    }

    //can be used as a shortcut to auto generate the engine feild
    // constructor(public engine: string) {
    //     this.engine = engine;
    // }

    get num(): number {
        return this._number;
    }

    set num(value: number){
        if(value == undefined) throw 'Supply a number';
        this._number = value;
    }

    start(){
        alert('Engine started: '+ this.engine);
    }

    stop(){
        alert('Engine stopped: '+ this.engine);
    }
}

class Engine {
    constructor(public horsePower: number, public engineType: string){

    }
}

class Van {
    private _engine : Engine;

    constructor(engine : Engine){
        this._engine = engine;
    }

    start() : void {
        alert('Engine started: '+ this._engine.engineType);
    }

    stop() : void {
        alert('Engine stopped: '+ this._engine.engineType);
    }
}

var engine : Engine = new Engine(1000, 'V8');
var van: Van = new Van(engine);