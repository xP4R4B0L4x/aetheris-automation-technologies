# AWCMP Dual-Mission Roadside Sensing Network Report

## Executive overview and website positioning

The Adaptive Wildlife Collision Mitigation and Prevention System (AWCMP) is best positioned as a **dual-mission roadside intelligence network**: it reduces wildlife–vehicle collisions and also detects dangerous roadway-departure events (vehicles leaving the roadway) to accelerate incident discovery and emergency response. This “duality” aligns with the reality that the highest-risk corridors for wildlife crossings are often the same rural, low-visibility corridors where severe roadway-departure crashes occur and may not be quickly witnessed or reported. citeturn0search5turn1search1turn0search0

This positioning is strongly supported by federally cited safety and cost impacts. The entity["organization","Federal Highway Administration","us dot agency"] notes that Congress found **more than 1,000,000 wildlife–vehicle collisions occur annually**, costing **over $8 billion** and resulting in **tens of thousands of serious injuries and hundreds of fatalities** on U.S. roads. citeturn0search0 The entity["organization","U.S. Department of Transportation","federal executive department"] has also cited annual impacts that include **~200 human fatalities, ~26,000 injuries**, and **>$10 billion** in public costs from wildlife–vehicle collisions involving large animals. citeturn0search4turn0search12

A dual-mission message also helps differentiate AWCMP from single-purpose wildlife warning systems. Many deployed wildlife detection systems focus on activating warning signs when animals are near the right-of-way; fewer solutions are designed (and marketed) to detect and classify **off-road vehicle-departure events** for rapid incident response. This gap creates a clear differentiation opportunity.

## Safety problem landscape AWCMP targets

### Wildlife–vehicle collisions

The U.S. collision burden is large enough that wildlife mitigation has become a national safety program category. In its “Report to Congress,” the entity["organization","Federal Highway Administration","us dot agency"] summarized national datasets and concluded there are **between one and two million wildlife–vehicle collisions annually** and that the number is **increasing**. citeturn6view0

Public-sector summaries emphasize both human and economic costs. The entity["organization","Federal Highway Administration","us dot agency"] and the entity["organization","U.S. Department of Transportation","federal executive department"] have cited annual collision volumes (>1M) and multi‑billion-dollar impacts. citeturn0search0turn0search4 This supports website language that frames AWCMP as a life-safety and infrastructure-cost solution, not only a conservation measure.

### Roadway departures and “unobserved” off-road crashes

Roadway departures are consistently identified as a dominant fatal crash category. The entity["organization","Federal Highway Administration","us dot agency"] reports that from 2016–2018, roadway departures averaged **19,158 fatalities per year**, about **51% of all U.S. traffic fatalities**. citeturn1search1 A newer entity["organization","National Highway Traffic Safety Administration","us dot agency"] CrashStats publication reports that in 2022 there were **20,514 fatalities in roadway departure crashes**, about **48% of total fatalities**. citeturn1search4

These events are especially relevant to AWCMP because they often happen on rural roads and can involve high-severity impact mechanisms such as trees, poles, overturns, or leaving the traveled way entirely. entity["organization","National Highway Traffic Safety Administration","us dot agency"] describes run‑off‑road crashes as events where a vehicle leaves the road and collides with fixed objects (e.g., trees, poles) or overturns on non-traversable terrain. citeturn0search1 The entity["organization","U.S. Department of Transportation","federal executive department"] also emphasizes that **most fatalities in rural areas are the result of roadway‑departure crashes**. citeturn0search5

A key “duality” advantage is incident discovery time. Automatic crash notification is widely discussed as a rural safety need because fewer passersby may witness a crash and call for help. The National Rural Road Safety Center notes that crash notification systems are especially important in rural areas because response times are longer and there are fewer travelers who may contact emergency services. citeturn1search6 Research on “rescue time” in fatal accidents has also shown broadly longer overall times in rural settings, including communication delays. citeturn8search2

While “not found for years” is not the norm, delayed discovery is well documented in real-world cases:
- A missing driver was identified **22 years later** after a submerged car was noticed via satellite imagery and recovered by authorities. citeturn9search7  
- An entity["organization","Associated Press","news agency"] report described remains confirmed after **over 20 years**, recovered from a submerged vehicle in a reservoir. citeturn9news37  
- A driver survived after being trapped for **nearly five days** at the bottom of a ravine before rescue. citeturn9search27  
- A recent long‑term disappearance case was advanced when a submerged mid‑1960s car with remains was recovered after sonar detection, illustrating how vehicles can remain hidden from view over long periods. citeturn9news42  

For website messaging, these examples can be used carefully as **illustrations** of why “off-road incident detection” matters—particularly where vegetation, ravines, or water can conceal vehicles from passing traffic.

## AWCMP sensing approach and why multi-sensor matters

### What deployed wildlife detection systems show about effective sensing

Existing wildlife warning deployments and evaluations indicate a repeated pattern: single-sensor systems struggle with false positives, false negatives, or reliability issues; multi-sensor approaches improve detection confidence when integrated well.

Examples from deployed or evaluated systems include:
- A radar-triggered wildlife warning approach documented by the entity["organization","U.S. Department of Transportation","federal executive department"] ITS knowledge base: radar detects a “large mammal,” triggers repeated thermal imaging, and activates warning lights for a defined period; the monitored road section and detection-zone dimensions are explicitly measured. citeturn2search5  
- A full reliability/effectiveness evaluation of a radar-based animal detection system describing a designed detection segment length and warning-sign activation. citeturn2search18  
- A entity["organization","California Department of Transportation","state transportation agency california"] evaluation describing a test configuration that included multiple radars, cameras, warning signs, and comparison against infrared camera recordings to assess detection reliability. citeturn2search33  
- A pooled-fund / agency literature review documenting real-world issues such as communications not meeting specifications, false positives/negatives, downtime, and integration problems between detection and warning subsystems. citeturn0search10  

These findings strongly support AWCMP’s stated design intent: **sensor fusion** (cross-validating radar/LiDAR/thermal/optical with vibration/acoustic signatures) should reduce nuisance alarms and increase confidence in both wildlife and roadway‑departure event detection.

### Sensor modalities relevant to AWCMP’s dual mission

AWCMP’s proposed “Smart Marker Unit (SMU)” concept—distributed roadside nodes with multiple sensors—aligns with both the wildlife detection literature and broader intelligent infrastructure trends.

**Wildlife detection relevance**
- Radar and thermal imaging are repeatedly used in wildlife detection warning concepts and real deployments. citeturn2search5turn2search18turn2search1  
- Distributed IoT wildlife detection nodes mounted on roadside posts are an established research direction, reinforcing that roadside infrastructure-based detection is viable in varied weather and seasons. citeturn0search6  
- Recent research proposes combined radar and infrared systems installed on roadside delineators at regular spacing, monitoring zones parallel to the road—directly relevant to corridor-scale deployment logic. citeturn2search14  

**Roadway-departure / incident detection relevance**
- Roadway-departure crashes frequently involve impacts, rollover, fixed-object collision, or leaving the traveled way—mechanisms that can produce measurable kinematics and high-energy signatures (trajectory changes, impact vibration, acoustic transients). citeturn0search1turn1search5  
- Roadside sensing and perception is an active area of intelligent transportation research, including roadside LiDAR for detection and tracking and multi-sensor fusion architectures. citeturn7search21turn7search14  
- Commercial roadside impact alerting exists today for roadside safety hardware (e.g., crash cushions/guardrails) and demonstrates operational models for “impact → cellular alert → location/severity.” citeturn7search4turn7search33  

These points support a website-explainable technical narrative: AWCMP uses **continuous corridor sensing** to detect “wildlife proximity risk” and “vehicle departure/impact events,” producing alerts with location and confidence.

## Corridor deployment geometry, near-ground placement, and bridge taper strategy

### Baseline placement constraints from roadway safety guidance

Your stated deployment intent—SMUs “very close to the ground,” approximately **15 feet from the roadway**, with special treatment on bridges—should be described in a way that acknowledges roadway safety design constraints.

The entity["book","Manual on Uniform Traffic Control Devices","FHWA traffic control manual"] includes rural sign placement examples showing a **12-foot minimum** lateral offset (pavement edge to near edge of a warning sign) in rural conditions. citeturn5search0 While SMUs are not signs, this reference supports the plausibility of right-of-way placements at ~15 feet for roadside equipment—provided the placement also respects the **clear zone** and crashworthiness requirements.

The entity["organization","Federal Highway Administration","us dot agency"] defines a **clear zone** as an unobstructed, traversable roadside area that allows a driver to stop safely or regain control after leaving the roadway, with width dependent on speed, volumes, slopes, and rollover risk. citeturn5search1 For any equipment located within the clear zone, FHWA guidance for sign supports indicates supports should be **breakaway** or **shielded** by barrier systems meeting recognized crashworthiness criteria. citeturn5search2

For website and stakeholder messaging, this translates into an implementation principle:
- SMUs are designed to be **low-profile and roadside-safe**, with placement and mounting methods that are compatible with corridor clear-zone and crashworthiness expectations. citeturn5search1turn5search2  

### Corridor coverage, spacing, and “gaps” (including bridges)

Real-world wildlife detection systems typically define a monitored segment length and zone width, and then deploy sensing/warning hardware around that geometry. For example, the ITS knowledge base description of a radar/thermal wildlife detection deployment monitored a defined road section length and width, and used time-based warning sign activation logic. citeturn2search5

Research deployments also show two scalable corridor patterns:
- **Segment monitoring**: instrument a defined high-risk segment with a bounded detection area and warning signs upstream/downstream. citeturn2search5turn3search15  
- **Node networks**: place repeated roadside nodes (often on delineators/marker posts) at regular spacing to observe a parallel zone along the roadway. citeturn0search6turn2search14  

Your bridge approach—“taper on bridges to lock in the gaps”—can be described as a practical response to physical constraints on bridges (limited shoulder/structure, different mounting opportunities) and the need to maintain continuous detection coverage across transition zones.

A website-ready, technically credible description could frame the deployment geometry like this (conceptual, not a standards promise):
- **Standard segments**: low-mounted SMUs placed ~15 feet from the roadway edge where right-of-way and clear-zone considerations allow, oriented to monitor the shoulder, roadside slope, and animal approach paths. citeturn5search1turn5search2turn5search0  
- **Approach tapers**: SMU spacing increases (or sensor field-of-view overlaps increase) as the corridor approaches bridges/culverts/guardrail transitions, reducing blind spots created by constrained mounting locations.  
- **Bridge continuity**: where ground placement is constrained, SMUs can shift to structure-adjacent mounting (e.g., at bridge approaches or parapet-compatible locations) to “stitch” sensing coverage across the bridge span, then return to standard placement after the bridge.  
- **Vegetation and occlusion management**: near-ground sensing improves detection of roadside-level hazards but increases occlusion risk (vegetation, snow berms, roadside furniture); multi-sensor fusion and corridor maintenance planning mitigate this. citeturn2search14turn5search1  

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["radar wildlife detection warning signs highway","roadside animal detection system thermal camera warning sign","AUG Signals Large Animal Detection System LADS radar","Navtech Radar highway automatic incident detection"],"num_per_query":1}

### How to describe near-ground sensor height on the website

Because “close to the ground” is a distinctive implementation choice, it should be explained as an engineering tradeoff:
- Lower mounting can improve sensitivity to **roadside-level movement and crossings**, and can reduce detection of irrelevant distant targets by narrowing the effective vertical field.  
- Lower mounting can increase occlusion from vegetation and snow; therefore AWCMP uses multi-sensor corroboration (e.g., radar trajectory + thermal signature + LiDAR geometry where used) to preserve detection reliability. citeturn2search14turn2search5turn0search10  

This balances differentiation with credibility, and it aligns with documented challenges in animal detection system deployments where reliability issues (false positives/negatives, downtime, integration problems) can undermine trust if not addressed. citeturn0search10turn2search33

## Event detection workflows and emergency response integration

### Wildlife approach and crossing-risk workflow

A defensible “how it works” story for wildlife is:
1. SMUs monitor a roadside detection zone for large-animal signatures using radar/thermal/optical (depending on configuration). citeturn2search5turn2search18turn2search14  
2. When animal-like motion is detected, multi-sensor correlation is used to classify and assign confidence, reducing false activations (a known system risk). citeturn0search10turn2search33  
3. If crossing risk is high, AWCMP activates corridor warnings (dynamic roadside alerts, upstream/downstream sign activation) consistent with how roadside animal detection warning systems are typically implemented. citeturn2search5turn3search15turn2search30  

### Roadway-departure and “vehicle off-road” workflow

Roadway-departure detection should be framed as a **situational awareness and notification** capability rather than a guarantee of outcome prediction. The public-safety logic is clear: roadway departures represent roughly half of crash fatalities nationally, and rural corridors are disproportionately affected. citeturn1search1turn1search4turn0search5

A credible detection workflow can be described as:
1. **Trajectory anomaly detection**: radar/LiDAR/vision observe a vehicle leaving the traveled way into the monitored roadside zone (departure vector, speed change, unusual path). citeturn7search21turn7search14  
2. **Impact/severity signals**: near-road vibration (ground/structure), acoustic transients, and/or sudden stopping/rollover signatures increase confidence of an actual crash versus a benign pull-off (where configured). (Acoustic and impact-based incident detection is an established research and product area, especially in constrained environments.) citeturn7search5turn7search1turn7search4  
3. **Automated alert package**: timestamp, GPS location (corridor reference), and confidence/severity estimate are transmitted to an operations center or emergency dispatch workflow, similar in concept to existing “impact alert” products used for roadside safety assets. citeturn7search4turn7search33  

### Why faster notification is a life-safety benefit

Clinical and road safety organizations consistently emphasize that longer crash-to-notification times are associated with worse outcomes, particularly in rural settings. The entity["organization","American College of Surgeons","professional association"] states that longer response times from collision to EMS notification have been associated with increased risk of death, especially in rural areas. citeturn1search14 A rural safety field document also reports field testing where automatic notification reduced average incident notification time from around three minutes to less than one minute. citeturn1search6

AWCMP’s “vehicle off-road” messaging can therefore credibly emphasize:
- Roadway departures are common and deadly. citeturn1search1turn1search4  
- Rural corridors often have longer discovery/notification windows. citeturn1search6turn8search2  
- Rapid detection and location reporting helps responders reach crashes sooner—particularly those hidden by terrain, vegetation, ravines, or water (with documented real-world cases ranging from days to decades). citeturn9search27turn9search7turn9news37  

## Competitor and competition landscape for corridor deployments

### Direct competitors in wildlife detection and warning systems

AWCMP’s closest competitors are suppliers of roadside animal detection systems (ADS) that trigger warnings when animals are near the road.

**entity["company","AUG Signals","canadian wildlife detection company"]**  
AUG markets a radar-based Large Animal Detection System (LADS) designed to monitor large animals on highways and warn motorists, emphasizing solar power and low environmental disturbance. citeturn3search2 Trade coverage describes LADS as using 360-degree scanning radar to monitor moving objects at substantial range. citeturn3search10

**entity["company","Navtech Radar","uk radar sensor company"]**  
Navtech offers a wildlife detection capability as part of its ITS radar applications, describing automatic triggering of signs and operation in poor visibility. citeturn3search3

**entity["company","Telonics","remote telemetry and sensor company"] / EIDS-based deployments**  
Telonics’ Eagle Intrusion Detection System (EIDS) is a flexible sensor system designed to incorporate seismic, magnetic, and infrared detectors. citeturn3search13turn3search5 A well-known U.S. deployment evaluated by entity["organization","Wyoming Department of Transportation","state transportation agency wyoming"] used EIDS with seismic and passive infrared sensors to trigger wildlife warning signs, illustrating how military/security sensing tech has been adapted to wildlife road-crossing contexts. citeturn3search1turn3search9

**System integrators and consultancies (project delivery competitors)**  
Some competitors function as designers/integrators rather than single-product suppliers. entity["company","Animex International","road ecology and mitigation firm"] describes designing, installing, and monitoring wildlife detection and warning systems using multiple detection technologies (radar, break beam, lidar, etc.), often in partnership ecosystems. citeturn3search7

### Adjacent competitors and substitutes in wildlife mitigation

Some wildlife mitigation approaches do not detect animals; they attempt to deter animals or physically separate wildlife from the roadway:
- **Virtual fencing / animal deterrence**: entity["company","Wildlife Safety Solutions","australia virtual fencing company"] markets “virtual fencing” that alerts animals when vehicles approach during dusk-to-dawn periods. citeturn2search2turn2search36  
- **Static/active signage products**: traffic control product suppliers can sell flashing wildlife warning sign systems with optional sensing add-ons, competing for budget when agencies treat wildlife mitigation primarily as a signage problem. citeturn3search0  
- **Crossing structures and fencing**: Large capital projects are funded nationally through wildlife crossings programs and may compete for the same corridor safety attention, though they can also be complementary to detection systems. citeturn0search0turn0search4  

A key AWCMP website implication: agencies may compare AWCMP either to **(a) detection + warning systems** or to **(b) structural mitigation** depending on whether the corridor is treated as an operational hazard (needs real-time alerts) or a connectivity problem (needs structural crossings).

### Corridor-scale incident detection and “smart corridor” competitors

For the roadway-departure / incident-detection side of AWCMP’s dual mission, competition comes from ITS corridor monitoring and incident detection vendors—typically focused on traffic flow, stopped vehicles, wrong-way detection, and incident management rather than wildlife.

**entity["company","Navtech Radar","uk radar sensor company"] (automatic incident detection)**  
Navtech markets automatic incident detection for highways and tunnels using 360° radar, emphasizing detection within seconds. citeturn4search0turn4search8

**entity["company","Iteris","smart mobility infrastructure company"]**  
Iteris positions its ClearMobility platform and smart sensor suite around monitoring and optimizing mobility infrastructure, including detections via video, radar, and hybrid sensors and services supporting corridors and highways. citeturn4search9turn4search15turn4search12

**entity["company","Kapsch TrafficCom","its and tolling company"]**  
Kapsch markets end-to-end orchestrated “connected corridors” and traffic management solutions with incident detection as part of broader operations platforms. citeturn4search23turn4search10

**entity["company","Yunex Traffic","intelligent traffic systems company"]**  
Yunex highlights detector portfolios (video, radar, AI-based detection) that support traffic management contexts and can be configured to detect diverse road users and situations. citeturn4search7turn4search3

AWCMP’s core differentiation versus these corridor systems, if executed as described, is that AWCMP is not only “traffic monitoring”—it is a **roadside hazard intelligence layer** that explicitly targets wildlife presence and roadway departures, including off-road areas where standard freeway monitoring (focused on lanes) may not provide high confidence.

### Roadside asset impact notification competitors (adjacent and potentially complementary)

A separate but relevant competitor class is “impact detection for roadside hardware.” These products typically detect impacts on crash cushions/guardrails and immediately alert maintenance/operations teams.

- entity["company","Lindsay Corporation","road safety infrastructure company"] markets an impact sensor that mounts to crash cushions/guardrails/utility poles and transmits alerts via cellular. citeturn7search4  
- entity["company","Hill & Smith","road safety products manufacturer"] markets an impact notification device for crashworthy devices with real-time email/SMS alerting. citeturn7search33  
- entity["company","Pi-Lit","work zone safety products company"] markets an impact detection system for barriers/crash cushions using gateway/node architectures. citeturn7search0  

These solutions do not typically address wildlife detection and may not detect “vehicle went off-road into vegetation/water” unless impact occurs on instrumented hardware. They are important in the competition report because they represent an **existing procurement pattern** for crash notification infrastructure: agencies already buy “impact → alert” systems, which can validate AWCMP’s broader “incident detection and notification” framing.

### Implications for corridor competition strategy

AWCMP’s corridor competition is therefore best described as three overlapping competitive arenas:

1. **Wildlife detection + driver warning systems** (direct): vendors like AUG Signals, EIDS-based solutions, and radar/thermal ADS deployments. citeturn3search2turn3search1turn2search5turn0search10  
2. **Smart corridor monitoring and incident management** (substitute for the “incident detection” half): Navtech AID, Iteris, Kapsch, Yunex. citeturn4search0turn4search9turn4search23turn4search7  
3. **Crash hardware impact alerting** (adjacent/complement): Lindsay ImpactAlert, Hill & Smith alerts, Pi‑Lit IDS. citeturn7search4turn7search33turn7search0  

Where AWCMP can stand out—based on the evidence from deployments and literature—is by emphasizing operational pain points agencies have faced with animal detection systems (integration reliability, communications, false positives/negatives, downtime) and presenting AWCMP as a multi-sensor, corridor-safe architecture designed to improve confidence and extend the same sensing layer to roadway-departure detection. citeturn0search10turn2search33turn5search2turn5search1