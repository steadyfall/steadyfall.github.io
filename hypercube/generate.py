import networkx as nx
import matplotlib.pyplot as plt


G = nx.hypercube_graph(4)
pos = nx.spring_layout(G)                   # (spring layout works well for hypercubes)
fig, ax = plt.subplots(figsize=(8, 8))      # transparent background

nx.draw(
    G, pos, with_labels=False, 
    node_size=500, node_color="#00FFFF",    # Cyan nodes (good contrast in both modes)
    edge_color="#333333",                   # Dark gray edges (works in both modes)
    width=4,                                # Make edges extra bold
    ax=ax
)
ax.set_axis_off()

# 4_hypercube_graph_square_bold_edges_contrast
plt.savefig(
    "icon.png", 
    format="png", 
    transparent=True, 
    bbox_inches='tight', 
    pad_inches=0
)

plt.show()
