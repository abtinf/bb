//Launch scripts based on current state/capabilities.

export async function main(ns) {
    const home = "home";
    const initPcRam = 8;
    
    var ram = ns.getServerRam(home)[0];
    
    if (ram == initPcRam) {
        ns.tprint("New game...")
    } else {
        ns.tprint("Current state not supported")
    }
}
