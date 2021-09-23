using ToSic.Razor.Blade;

public class Helpers: Custom.Hybrid.Code12
{
  // returns required attributes for editing mode if needed
  public dynamic EditAttr(int moduleId, dynamic data, dynamic settings) {
    if(!Edit.Enabled) return null;

    // Must wrap in Tag.Custom so the HTML-Encoding will be correct
    return "data-module-id='" + moduleId
      + "' data-entity-id='" + data.EntityId
      + "' data-guid='" + data.EntityGuid
      + "' data-iconoffset-x='" + settings.HotspotMarker.HotspotOffsetX
      + "' data-iconoffset-y='" + settings.HotspotMarker.HotspotOffsetY + "'"; 
  }

  // This position the marker on the image and sets the size as needed
  public dynamic MarkerStyles(dynamic hotspot, dynamic settings) {
    return "top: " + hotspot.Y.ToString() + "%;" 
      + " left: " + hotspot.X.ToString().Replace(",",".") + "%;" 
      + " width: " + settings.HotspotMarker.HotspotWidth + ";"
      + " height: " + settings.HotspotMarker.HotspotHeight;
  }
}
