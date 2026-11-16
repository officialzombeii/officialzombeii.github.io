async function fillTrackList() {
  const select = $("track");
  let tracks = [];
  try {
    const data = await jolpica("seasons.json?limit=100");
    tracks = data.SeasonTable.Seasons.map(s => Number(s.season)).filter(Number.isFinite);
  } catch (error) {
    log("The list of tracks could not be loaded (" + error.message + ")", "bad");
  }
  tracks.sort((a, b) => b - a);
  const builtIn = new Set(SEASON_YEARS);
  const preferred = tracks.find(y => !builtIn.has(y)) || tracks[0];
  select.innerHTML = tracks.map(y => `<option value="${y}" ${y === preferred ? "selected" : ""}>${y}${builtIn.has(y) ? " (already built in)" : ""}</option>`).join("");
  $("loadTrack").disabled = false;
}